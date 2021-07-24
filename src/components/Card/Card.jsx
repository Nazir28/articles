import React, {useState} from 'react'
import './card.css';
import Share from '../utils/Share';
import Service from '../../service';
import {useDispatch} from 'react-redux';
import {setBookmarketArticles} from '../../store/reducers/mainReducer';
import {Link} from 'react-router-dom'
function Card({article}) {
    const link = window.location.href;
    const [bookmarket, setBookmarket] = useState(article.bookmarket)
    const dispatch = useDispatch()
    function handleBookmarket() {
        setBookmarket(!bookmarket)
        Service.togglePopular(article, bookmarket)
        if(article.bookmarket === true){
            dispatch(setBookmarketArticles(article.id))
        }
    }
    return (
        <>
            <div className="custm-card">
                <div className="card">
                    <img src={article.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                    </h5>
                    <p className="card-text">{article.description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center"> 
                            <a href={article.articleSite.url} className="btn-ic">
                                <img src={article.articleSite.logo} alt="" className="img-fluid" />
                            </a>
                        </div>  
                        <div className="d-flex align-items-center">
                            <div className="dropdown send-descover dropup">
                                <button className="btn btn-save mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12L12.75 4.125V8.625C4.85484 8.625 3 14.2861 3 19.875C5.27859 16.9575 7.29375 15.375 12.75 15.375V19.875L21 12Z" stroke="#666666" strokeWidth="1.5" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right z" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/" onClick={() => Share.facebook(link,article.title,article.image,article.description)}>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.4999 13.0625C22.4999 7.26406 17.7984 2.5625 11.9999 2.5625C6.2015 2.5625 1.49994 7.26406 1.49994 13.0625C1.49994 18.3031 5.339 22.647 10.3593 23.4355V16.0986H7.6926V13.0625H10.3593V10.7492C10.3593 8.11813 11.9273 6.66359 14.3254 6.66359C15.4743 6.66359 16.6762 6.86891 16.6762 6.86891V9.45313H15.3515C14.0479 9.45313 13.6401 10.2622 13.6401 11.0938V13.0625H16.552L16.087 16.0986H13.6406V23.4364C18.6609 22.6484 22.4999 18.3045 22.4999 13.0625Z" fill="#3A5794"/>
                                            </svg>
                                        </span>
                                        Facebook
                                    </a>
                                    <a className="dropdown-item" href="/" onClick={() => Share.twitter(link,article.title)}>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.25 6.13282C22.406 6.49955 21.513 6.74116 20.5992 6.85001C21.5595 6.28769 22.2817 5.39434 22.6303 4.33751C21.7224 4.86841 20.7307 5.24092 19.6978 5.43907C19.2629 4.98322 18.7398 4.62059 18.1603 4.3732C17.5808 4.12581 16.9571 3.99884 16.327 4.00001C13.7761 4.00001 11.7117 6.03438 11.7117 8.5422C11.7099 8.89102 11.7499 9.23881 11.8308 9.57813C10.0016 9.49238 8.2104 9.02575 6.57187 8.2081C4.93333 7.39044 3.48351 6.23977 2.31516 4.8297C1.90527 5.52069 1.6885 6.30909 1.6875 7.11251C1.6875 8.68751 2.50922 10.0797 3.75 10.8953C3.01487 10.8779 2.29481 10.6833 1.65094 10.3281V10.3844C1.65094 12.5875 3.24469 14.4203 5.35406 14.8375C4.9574 14.9432 4.54864 14.9968 4.13813 14.9969C3.84683 14.9974 3.55621 14.9691 3.27047 14.9125C3.85688 16.7172 5.5636 18.0297 7.58531 18.0672C5.94252 19.3333 3.9256 20.0175 1.85156 20.0125C1.48341 20.012 1.11561 19.99 0.75 19.9469C2.85993 21.2942 5.31255 22.0068 7.81594 22C16.3172 22 20.9616 15.0766 20.9616 9.07188C20.9616 8.87501 20.9564 8.67813 20.947 8.48595C21.8485 7.84472 22.6284 7.04787 23.25 6.13282Z" fill="#5DA9DD"/>
                                            </svg>
                                        </span>
                                        Twitter
                                    </a>
                                </div>
                            </div>
                            <button className={`btn btn-save ${bookmarket? 'active': ''}`} onClick={handleBookmarket} >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5001 2.25H7.50012C6.90339 2.25 6.33109 2.48705 5.90913 2.90901C5.48718 3.33097 5.25012 3.90326 5.25012 4.5V21.75L12.0001 15.75L18.7501 21.75V4.5C18.7501 3.90326 18.5131 3.33097 18.0911 2.90901C17.6692 2.48705 17.0969 2.25 16.5001 2.25Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>                                     
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Card
