import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    console.log(countries);

    return (
        <div>
            {
                countries.map(country => <Link to={`/country/${country.name}`}><li>{country.name}</li></Link>)
            }
        </div>
    );
};

export default Home;