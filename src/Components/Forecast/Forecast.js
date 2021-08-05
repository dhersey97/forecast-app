import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import DayList from '../DayList/DayList';
import './Forecast.css';

const city = "boston";

const Forecast = ({ location }) => {

    let [responseObj, setResponseObj] = useState({});
    let [loading, setLoading] = useState(false); 
    let [error, setError] = useState(false);

    let lat = "42.3";
    let lon = "-71";

    function getCoordinates(location){
        fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.REAC_APP_MAPQUEST_API_KEY}&location=${location}`)
            .then(response => response.json())
            .then(response => {
                if(!response.ok){
                    console.log('Error response', response.status);
                    throw new Error()
                }
                else{
                    lat = response.results[0].locations[0].latLng.lat;
                    lon = response.results[0].locations[0].latLng.lng;
                    getForecast();
                }    
            })
    }

    function getForecast(e) {
        e.preventDefault();

        setResponseObj({});
        setError(false);
        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
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
            <Button onClick={getCoordinates} label="Search Location" variant="outline-brand" className="rainbow-m-around_medium" />
            <DayList 
                responseObj = {responseObj}
                loading = {loading}
                />
        </div>
    )
}

export default Forecast;