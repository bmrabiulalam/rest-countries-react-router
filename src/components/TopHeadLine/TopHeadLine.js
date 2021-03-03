import React, {useState, useEffect} from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect( () => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=22d3e301f36743539e902fd0c6ce111f';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles));
    }, []);

    return (
        <div>
            <h3>Top Headlines: {articles.length}</h3>
            <div className="d-flex flex-wrap justify-content-around">
                {articles.map(article => <News article={article}></News>)}
            </div>
        </div>
    );
};

export default TopHeadLine;