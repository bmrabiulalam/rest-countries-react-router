import React, {useState, useEffect} from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticles] = useState([]);

    function getDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
    useEffect( () => {
        const dateTime = getDate();
        const url = `http://newsapi.org/v2/everything?q=tesla&from=${dateTime}&sortBy=publishedAt&apiKey=22d3e301f36743539e902fd0c6ce111f`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.articles);
            setArticles(data.articles)});
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