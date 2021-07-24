import React from 'react'
import './header.css';
import {useDispatch} from 'react-redux';
import {sidebarOpen} from '../../store/reducers/mainReducer'
function Header(props) {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(sidebarOpen())
    }
    return (
        <header>
            <div className="sidebar-text">
                <h2>GOODREADS</h2>
            </div>
            <div className="container-fluid">
                <div className="main-header">
                    <div className="d-flex align-items-center">
                        <button className="toggle-sidebar btn d-lg-none p-0 mr-4" onClick={handleClick}>
                            <svg width="30" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.00006 18.9961H21.0001V16.9959H3.00006V18.9961ZM3.00006 13.9959H21.0001V11.9963H3.00006V13.9959ZM3.00006 6.99609V8.99625H21.0001V6.99609H3.00006Z" fill="#666666"/>
                            </svg>
                        </button>
                        <h1>{props.headerH1}</h1>
                    </div>
                    <a href="/" className="d-flex align-items-center">
                        <div className="image-wrapper">
                            <img src="/images/avatars/avatar-1.png" alt=""/>
                        </div>
                        <div className="text-wrapper d-sm-block d-none m-2">
                            <h6>Abagael Trumbo</h6>
                            <p>premium account</p>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
