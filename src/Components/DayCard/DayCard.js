import React from 'react';
import { Card, ButtonIcon, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './DayCard.css';

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};

function kelvinToFahrenheit(tempK){
    return Math.round((tempK - 273.15) * (9/5) + 32);
}

const currentDate = new Date();
function calcDay(i){//i = how many days difference from the current day
    const today = currentDate.getDay() //Today is Wednesday, so today = 3
    let targetDay = 0;
    if(i === 0){
        return 'Today';
    }
    else{
        targetDay = today + i;
    }

    if(targetDay > 6){
        targetDay = targetDay - 7;
    }

    switch(targetDay){
        case(0):{
            return 'Sunday';
        }
        case(1):{
            return 'Monday';
        }
        case(2):{
            return 'Tuesday';
        }
        case(3):{
            return 'Wednesday';
        }
        case(4):{
            return 'Thursday';
        }
        case(5):{
            return 'Friday';
        }
        case(6):{
            return 'Saturday';
        }
        default: return targetDay;
    }
}

export const DayCard = ({ day, dayTemp, tempMin, tempMax, main, desc, icon }) => {

    return (
        <div className="rainbow-m-around_large">
            <Card
                title={calcDay(day)}
                footer={
                    <div className="rainbow-align-content_space-between">
                        <div className="rainbow-flex">
                            more 
                        </div>
                        <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
                    </div>
                }
                >
                <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                    <div className="day-info-column">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
                        <h1 className="rainbow-p-top_large rainbow-font-size-heading_small">
                            {kelvinToFahrenheit(dayTemp)}°
                        </h1>
                        {desc}
                    </div>
                    <div className="temp-container">
                        <div className="tempMin">
                            Low: {kelvinToFahrenheit(tempMin)}   
                        </div>
                        <div className="tempMax">
                            High: {kelvinToFahrenheit(tempMax)} 
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DayCard;