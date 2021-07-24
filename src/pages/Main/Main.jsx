import React from 'react'
import {Card} from '../../components/Card'
import {MainLayout} from '../../layouts';
import {Spinner} from '../../components/Spinner';
import {useSelector} from 'react-redux';
function Main() {
    const getArticles = useSelector(state => state.main.getArticles)

    return <MainLayout headerH1="Discover" content={()=>(
        <div className="container-fluid">
            {
            getArticles.isLoad ? <Spinner/> : (
                <div className="row">
                    {
                        getArticles.articles.map((item)=>(
                            <div key={item.id} className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-4">
                                <Card article={item}/>
                            </div>
                        ))
                    }
                    
                </div>
                )
            }
        </div>
    )}/>
}

export default Main
