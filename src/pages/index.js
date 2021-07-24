import Main from './Main/Main'
import Bookmarket from './Bookmarket/Bookmarket'
import ReadLatter from './ReadLatter/ReadLatter'
import Article from './Article/Article'
import Popular from './Popular/Popular'

const arr = [
    {component: <Main/>, link:'/main'},
    {component: <Bookmarket/>, link:'/bookmarket'},
    {component: <ReadLatter/>, link:'/read-letter'},
    {component: <Article/>, link:'/article/:id'},
    {component: <Popular/>, link:'/popular'},
]
export default arr;