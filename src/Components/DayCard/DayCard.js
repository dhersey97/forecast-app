import React from 'react';

export const DayCard = ({ day, icon, main, description, tempMin, tempMax}) => {
    return (
        <div>
            <h1>{day}</h1>
            <img alt="icon" src={`http://openweathermap.org/img/wn/${icon}d@2x.png`}/>
            <h1>{main}</h1>
            <h1>{description}</h1>
            <h1>{tempMin}</h1>
            <h1>{tempMax}</h1>
        </div>
    );
};

export default DayCard;