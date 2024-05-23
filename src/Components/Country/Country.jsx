import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleCountriesFlag}) => {
    const {name,flags,population,cca3} = country;
    const[visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
   
    return (
        <div className='country'>
            <h3>Country: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <small>Code: {cca3}</small> <br />
            <button onClick={handleVisitedCountries}>Mark Visited</button><br />
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {visited? ' I have visited this country':' I want to visit'}<br/>
            <button onClick={handleCountriesFlag}>Display Flag</button>
            
        </div>
    );
};

export default Country;