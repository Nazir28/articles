import React, {useEffect} from 'react'
import {MainLayout} from '../../layouts';
import {Spinner} from '../../components/Spinner'
import Service from '../../service'; 
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {getByIdArticle} from '../../store/reducers/mainReducer';
import './article.css';

function Article() {
    const {id} = useParams();
    const getOneArticle = useSelector(state => state.main.getOneArticle)
    const articles = useSelector(state => state.main.getArticles.articles)
    const dispatch = useDispatch()
    const article = getOneArticle.article[0]
    const date = new Date(article?.releasDate)
    async function setPopuar () {
        await Service.togglePopularity(article)
    }
    setPopuar()
    useEffect(() =>{
        dispatch(getByIdArticle(id))
        
    }, [articles])

    
    return <MainLayout headerH1="Bookmarket" content={()=>(
        <div className="container-fluid">
            {
            getOneArticle.isLoad ? <Spinner/>:(
                <div id="Article">
                    <div className="image-ban" style={{backgroundImage: `url('${article?.image}')`}}></div>
                    <small>{date.getDate()}.{String(date.getMonth().length) < 2 ? '0'+date.getMonth():date.getMonth()}.{date.getFullYear()}</small>
                    <h1>{article?.title}</h1>
                    <p>{article?.description}</p>
                    <div className="d-flex justify-content-center pb-5">
                        <div className="logo">
                            <a href={article?.articleSite.url}>
                                <img src={article?.articleSite.logo} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            )
            }
            
        </div>
    )}/>
}

export default Article
