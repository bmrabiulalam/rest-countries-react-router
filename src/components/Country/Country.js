import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Country = (props) => {
    const [countryLoaded, setCountryLoaded] = useState(false);
    const [country, setCountry] = useState({});
    const {countryName} = useParams();
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/name/'+countryName;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0]);
            setCountryLoaded(true);
        });
    }, [countryName]);

    const {
        name, 
        flag, 
        topLevelDomain, 
        alpha2Code, 
        alpha3Code,
        callingCodes,
        capital,
        altSpellings,
        region,
        subregion,
        population,
        latlng,
        demonym,
        area,
        timezones,
        borders,
        currencies,
        languages,
        regionalBlocs
    } = country;

    const currCode = countryLoaded ? currencies[0].code : '';
    const currName = countryLoaded ? currencies[0].name : '';
    const currSym = countryLoaded ? currencies[0].symbol : '';
    const lang = countryLoaded ? languages[0].nativeName : '';
    const rbac = countryLoaded ? regionalBlocs[0].acronym : '';
    const rbnm = countryLoaded ? regionalBlocs[0].name : '';

    return (
        <div>
            <h2>{name}</h2>
            <img style={{width: '300px'}} src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Top Level Domain: {topLevelDomain}</p>
            <p>Alpha 2 Code: {alpha2Code}</p>
            <p>Alpha 3 Code: {alpha3Code}</p>
            <p>Calling Codes: {callingCodes}</p>
            <p>Alternative Spellings: {altSpellings + ''}</p>
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <p>Population: {population}</p>
            <p>Latitude/Longitude: {latlng}</p>
            <p>Demonym: {demonym}</p>
            <p>Area: {area}</p>
            <p>Timezones: {timezones}</p>
            <p>Borders: {borders + ''}</p>
            <p>Currencies: {` Code: ${currCode} 
                              Name: ${currName} 
                              Symbol: ${currSym}`}</p>
            <p>Languages: {lang}</p>
            <p>Regional Blocs: {`${rbac}: ${rbnm}`}</p>
        </div>
    );
};

export default Country;
