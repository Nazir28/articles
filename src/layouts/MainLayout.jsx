import React, {useEffect, useState} from 'react'
import {Header} from '../components/Header'
import {Sidebar} from '../components/Sidebar'
import {useDispatch} from 'react-redux';
import {sidebarClose, setAllArtiles} from '../store/reducers/mainReducer';
import Service from '../service';

function MainLayout(props) {
    const [headerHeight, setheaderHeight] = useState(80)
    const dispatch = useDispatch()

    const closeSidebarOnLoad = ()=> dispatch(sidebarClose());
    closeSidebarOnLoad();
    useEffect(()=>{
        Service.getAllArticles()
            .then(res => dispatch(setAllArtiles(res.data)))
            .catch(rej=> console.log(rej))
        return() =>{}
    }, [])
    useEffect(()=>{
        

        function getHeightHeader () {
            const header = document.querySelector('header');
            setheaderHeight(header.clientHeight)
            
        }
        getHeightHeader()
        window.addEventListener('resize', () => {
            getHeightHeader()
        })
    }, [])
    const Content = props.content
    return (
        <div className="wrapper" onClick={()=> dispatch(sidebarClose())}>
            <Header headerH1={props.headerH1}/>
            <div style={{paddingTop: headerHeight+'px'}}>
                <Sidebar paddingTop={headerHeight+'px'}/>
                <main id="main" >
                    <Content/>
                </main>
            </div>
        </div>
    )
}

export default MainLayout
