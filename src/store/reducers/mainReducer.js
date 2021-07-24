import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    sidebar: false,
    getArticles: {
        isLoad: true,
        articles:[],
    },
    getBookmarkets: {
        isLoad: true,
        articles:[],
    },
    readLatter: {
        isLoad: true,
        articles:[],
    },
    getOneArticle:{
        article: {},
        isLoad: true,
    },
    popularArticles: {
        articles: [],
        isLoad: true,
    }
}
const close = document.createElement('div');
const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        sidebarOpen(state, action){
            if(window.pageXOffset <= 992){
                state.sidebar = true;
                close.classList.add('close-sidebar')
                document.body.querySelector('.wrapper').appendChild(close)
                close.addEventListener('click', () =>{
                    
                })
            }
        },
        sidebarClose(state, action){
            if(window.pageXOffset <= 992){
                state.sidebar = false;
                close.remove()
            }
        },
        setAllArtiles(state, action){
            state.getArticles.isLoad = true;
            state.getArticles.articles = [...action.payload];
            state.getArticles.isLoad = false;
        },
        getBookmarketArticles (state, action) {
            state.getBookmarkets.articles = state.getArticles.articles.filter(o => o.bookmarket === true);
            state.getBookmarkets.isLoad = false
        },
        setBookmarketArticles (state, action){
            state.getBookmarkets.articles = state.getBookmarkets.articles.filter(el => el.id !== action.payload)
        },
        readLatterArticles(state, action) {
            const arr = action.payload.filter(el => {
                const date = new Date(el.releasDate)
                const YY = date.getFullYear();
                const DD = date.getDate();
                const MM = date.getMonth();
                const nowDate = new Date()
                const nYY = nowDate.getFullYear();
                const nDD = nowDate.getDate();
                const nMM = nowDate.getMonth();
                if(((nMM - MM ) === 0) && ((nYY - YY) === 0) && ((nDD - DD) <= 1)){
                    return el
                }
            })
            
            state.readLatter.articles = arr;
            state.readLatter.isLoad = false
        },
        getByIdArticle(state, action){
            state.getOneArticle.article = state.getArticles.articles.filter(o => o.id === action.payload);
            state.getOneArticle.isLoad = false
        },
        getPopularArticles(state, action){
            state.popularArticles.articles = state.getArticles.articles.filter(o => o.popularity > 10);
            state.popularArticles.isLoad = false
        }
    }
})
export default mainReducer.reducer;
export const {
    sidebarOpen, sidebarClose, setAllArtiles, getBookmarketArticles, 
    setBookmarketArticles, readLatterArticles,getByIdArticle, getPopularArticles
} = mainReducer.actions