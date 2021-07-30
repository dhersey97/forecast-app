import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import './Forecast.css';

const Forecast = ({ lat, lon}) => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
			.then(response => response.json())
			.then(response => {
                setResponseObj(response.daily);
            });
    }

    return (
        <div className="center">
            <Button onClick={getForecast} label="Search Location" variant="outline-brand" className="rainbow-m-around_medium" />

        </div>
    )
}

export default Forecast;