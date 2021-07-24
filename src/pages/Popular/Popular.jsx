import React,{useEffect} from 'react'
import {Card} from '../../components/Card'
import {MainLayout} from '../../layouts';
import {Spinner} from '../../components/Spinner'
import {useSelector, useDispatch} from 'react-redux';
import {getPopularArticles} from '../../store/reducers/mainReducer';
function Popular() {
    const popularArticles = useSelector(state => state.main.popularArticles)
    const getArticles = useSelector(state => state.main.getArticles)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularArticles())
    }, [getArticles.articles])

    return <MainLayout headerH1="Read Latter" content={()=>(
        <div className="container-fluid">
            {
            popularArticles.isLoad ? <Spinner/> : (
                <div className="row">
                    {
                        popularArticles.articles.length === 0 ? <div className="col-12 flex-center" style={{minHeight: 80+'vh'}}><h2 className="">Dose't new articles                        </h2></div>: null
                    }
                    {
                        popularArticles.articles.map((item)=>{
                            return (
                                <div key={item.id} className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-4">
                                    <Card article={item}/>
                                </div>
                            )
                        })
                    }
                    
                </div>
                )
            }
        </div>
    )}/>
}

export default Popular
