import React from 'react';
import DayCard from '../DayCard/DayCard';
import {
    Loader
} from './DayList.css';

//<DayCard day={} dayTemp="297" tempMin="290" tempMax="299" main="Rain" desc="light rain" icon="10d"/>
const DayList = (props) => {
    if(props.loading == false){
        console.log(props.responseObj.timezone);
        return(
            <h1>{props.responseObj.timezone}</h1>
        )
    } else{
        return (
            <h1>{props.loading}</h1>
        )
    }

}

export default DayList;
