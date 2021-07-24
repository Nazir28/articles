import React, {useEffect} from 'react'
import {Card} from '../../components/Card'
import {MainLayout} from '../../layouts';
import {Spinner} from '../../components/Spinner'
import {useSelector, useDispatch} from 'react-redux';
import {getBookmarketArticles} from '../../store/reducers/mainReducer';
import Service from '../../service'; 


function Bookmarket() {
    const getBookmarkets = useSelector(state => state.main.getBookmarkets)
    const dispatch = useDispatch();

    useEffect(() => {
        Service.getAllArticles()
            .then(res => dispatch(getBookmarketArticles(res.data)))
            .catch(rej=> console.log(rej))
    }, [])

    return <MainLayout headerH1="Bookmarket" content={()=>(
        <div className="container-fluid">
            {
            getBookmarkets.isLoad ? <Spinner/> : (
                <div className="row">
                    {
                        getBookmarkets.articles.length === 0 ? <div className="col-12 flex-center" style={{minHeight: 80+'vh'}}><h2 className="">There are no books yet</h2></div>: null
                    }
                    {
                        getBookmarkets.articles.map((item)=>{
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

export default Bookmarket
