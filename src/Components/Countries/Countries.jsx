import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country"; 
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visitedCountries,setVisitedCountries] = useState([])
    const[countriesFlag,setCountriesFlag] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountries = country =>{
        const totalVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(totalVisitedCountries)
    }

    const handleCountriesFlag = country => {
        const totalCountriesFlag = [...countriesFlag,country]
        setCountriesFlag(totalCountriesFlag)
        
    }
    return (
        <div className="visited-information">
            <h3>Countries: {countries.length}</h3>
            <h4>Number Of Countries: {visitedCountries.length}</h4>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            {
                countriesFlag.map(flag=> <img 
                    key={flag.cca3}
                    className="flag-img" src={flag.flags.png} alt="" />)
            }
            <div className="country-container">
            {
                countries.map(country => 
                <Country 
                    key={country.cca3} 
                    country={country}
                    handleVisitedCountries={()=> handleVisitedCountries(country)}
                    handleCountriesFlag={() => handleCountriesFlag(country)}
                    >
                    
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;