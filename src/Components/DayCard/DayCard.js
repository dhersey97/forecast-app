import React, { useState } from 'react';
import { Card } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './DayCard.css';

const currentDate = new Date();
function calcDay(i){//i = how many days difference from the current day
    const today = currentDate.getDay() 
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

function timestampToData(timestamp){
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();

    if(hours > 12){
        hours = hours - 12;
    }

    return hours + ':' + minutes.substr(-2);
}

const DayCard = ({ day, dayTemp, tempMin, tempMax, desc, icon, sunrise, sunset, humidity, wind_speed, moon_phase }) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className="rainbow-m-around_large">
            <Card
                title={calcDay(day)}
                footer={
                    <div className="rainbow-align-content_space-between">
                        <div className="pointer" onClick={toggleClass}>
                            <div className="rainbow-flex">
                                {isActive ? 'less' : 'more'} 
                            </div>
                            <FontAwesomeIcon icon={isActive ? faAngleUp : faAngleDown}/>
                        </div>
                        <div className={isActive ? '' : 'none'}>
                            <ul>
                                <div className="floatLeft">
                                    <li>Sunrise</li>
                                    <li>Sunset</li>
                                    <li>Humidity</li>
                                    <li>Wind Speed</li>
                                    <li>Moon Phase</li>
                                </div>
                                <div className="floatRight">
                                    <li>{timestampToData(sunrise)}am</li>
                                    <li>{timestampToData(sunset)}pm</li>
                                    <li>{humidity}%</li>
                                    <li>{wind_speed}mph</li>
                                    <li>{moon_phase}</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                }
                >
                <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                    <div className="day-info-column">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
                        <h3 className="rainbow-p-top_large rainbow-font-size-heading_small">
                            {Math.round(dayTemp)}°
                        </h3>
                        {desc}
                    </div>
                    <div className="temp-container">
                        <div className="tempMin">
                            Low: {Math.round(tempMin)}°   
                        </div>
                        <div className="tempMax">
                            High: {Math.round(tempMax)}° 
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DayCard;