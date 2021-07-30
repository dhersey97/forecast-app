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

export const DayCard = ({ day, dayTemp, tempMin, tempMax, main, desc, icon }) => {

    return (
        <div className="rainbow-m-around_large">
            <Card
                title={day}
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
                    <img alt="weather icon"/>
                    <h1 className="rainbow-p-top_large rainbow-font-size-heading_small">
                        {kelvinToFahrenheit(dayTemp)}
                    </h1>
                    {desc}
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