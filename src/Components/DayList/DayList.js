import React from 'react';
import DayCard from '../DayCard/DayCard';

export const DayList = ({ forecast }) => {
    return (
        <div>
            {
                forecast.daily.map((x, i) => {
                    return(
                        <DayCard
                            key = {i}
                            icon = {forecast.daily[i].icon}
                            main = {forecast.daily[i].weather[0].main}
                            description = {forecast.daily[i].weather[0].description}
                            tempMin = {forecast.daily[i].temp.min}
                            tempMax = {forecast.daily[i].temp.max}
                        />
                    );
                })
            }
        </div>
    )
}

export default DayList;
