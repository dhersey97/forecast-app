import React from 'react';
import DayCard from '../DayCard/DayCard';
import './DayList.css';

export const DayList = (props) => {
    return (
        <div className="container">
            <DayCard day={} dayTemp="297" tempMin="290" tempMax="299" main="Rain" desc="light rain" icon="10d"/>
            
        </div>
    )
}

export default DayList;
