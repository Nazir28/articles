import axios from "axios";
class Service {
    url = (path) => `https://60f2a81c6d44f30017788721.mockapi.io/api/news${path}`;

    addArticles (article) {
        const {id,title,description,image,releasDate,bookmarket,popularity, articleSite} = article;
        axios.post(this.url('/articles'), {
            id,
            title,
            description,
            image,
            releasDate,
            bookmarket,
            popularity,
            articleSite
        })
        .then(res => res)
        .catch(err => err)
    }
    async getAllArticles() {
        try{
            const data = axios.get(this.url('/articles'));
            return data
        } catch (err) {
            console.log(err)
        }
    }
    togglePopular (article, market) {
        const {id} = article;
        axios.put(this.url(`/articles/${id}`), {
            ...article,
            bookmarket: !market
        })
        .then(res => res)
        .catch(err => err)
    }
    togglePopularity (article) {
        
        if(article){
            const {id, popularity} = article;
            console.log(article)
            axios.put(this.url(`/articles/${id}`), {
                ...article,
                popularity: popularity + 1
            })
            .then(res => res)
            .catch(err => err)
        }
    }
    getByIdArticles (id) {
        axios.get(this.url(`/articles/${id}`))
        .then(res => res)
        .catch(err => err)
    }

}
export default new Service()