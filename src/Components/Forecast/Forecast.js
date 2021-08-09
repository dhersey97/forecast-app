import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import DayList from '../DayList/DayList';
import './Forecast.css';

const Forecast = (props) => {

    let [responseObj, setResponseObj] = useState({});
    let [loading, setLoading] = useState(false); 
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
                setLoading(false);
                console.log(err.message);
            })
    }

    function getForecast(lat, lon) {

        setResponseObj({});
        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
			.then(response => response.json())
			.then(response => {
                if(response.ok){
                    throw new Error()
                }
                
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err.message);
            })
    }

    if(loading === true){
        return(
            <div>
                <Button isLoading label="Search Location" variant="outline-brand" className="rainbow-m-around_medium" />
            </div>
        )
    }else{
        return (
            <div>
                <Button onClick={() => getCoordinates(props.location)} id="button" label="Search Location" variant="outline-brand" className="rainbow-m-around_medium" />
                <DayList 
                    responseObj = {responseObj}
                    loading = {loading}
                    city = {city}
                    />
            </div>
        )
    }
}

export default Forecast;