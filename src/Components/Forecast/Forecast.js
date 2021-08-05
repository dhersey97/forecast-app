import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import DayList from '../DayList/DayList';
import './Forecast.css';

const Forecast = ({ location }) => {

    let [responseObj, setResponseObj] = useState({});
    let [loading, setLoading] = useState(false); 
    let [error, setError] = useState(false);
    let [city, setCity] = useState('');

    let lat = 0;
    let lon = 0;

    //https://open.mapquestapi.com/geocoding/v1/address?key=zeWCKE6hjSV1w8yfFvwdVF347A219A0G&location=Boston
    function getCoordinates(location){
        fetch(`https://open.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${location}`)
            .then(response => response.json())
            .then(response => {
                if(response.ok){
                    throw new Error()
                }
                
                lat = response.results[0].locations[0].latLng.lat;
                lon = response.results[0].locations[0].latLng.lng;
                setCity(location);
                getForecast(lat, lon);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            })
    }

    function getForecast(lat, lon) {

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

    return (
        <div>
            <Button onClick={() => getCoordinates(location)} label="Search Location" variant="outline-brand" className="rainbow-m-around_medium" />
            <DayList 
                responseObj = {responseObj}
                loading = {loading}
                city = {city}
                />
        </div>
    )
}

export default Forecast;