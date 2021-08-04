import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import DayList from '../DayList/DayList';
import './Forecast.css';

const Forecast = ({ lat, lon}) => {

    let [responseObj, setResponseObj] = useState({});
    let [loading, setLoading] = useState(false); 
    let [error, setError] = useState(false);

    function getForecast(e) {
        e.preventDefault();

        setResponseObj({});
        setError(false);
        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
			.then(response => response.json())
			.then(response => {
                if(response.ok){
                    throw new Error()
                }
                
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            })
    }

    console.log('loading', loading);
    console.log(responseObj);
    return (
        <div>
            <Button onClick={getForecast} label="Search Location" variant="outline-brand" className="rainbow-m-around_medium" />
            <DayList 
                responseObj = {responseObj}
                loading = {loading}
                />
        </div>
    )
}

export default Forecast;