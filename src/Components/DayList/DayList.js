import React from 'react';
import DayCard from '../DayCard/DayCard';
import {
    Loader
} from './DayList.css';

//<DayCard day={} dayTemp="297" tempMin="290" tempMax="299" main="Rain" desc="light rain" icon="10d"/>
const DayList = (props) => {
    if(props.loading === false){
        //console.log(props.responseObj.daily[0]);
        try{
            return (
                <>
                    <div className="centerTitle">
                        <br></br>
                        <h1>
                            {props.city.toUpperCase()}
                        </h1>
                    </div>
                    <div className="container">
                        {
                            props.responseObj.daily.slice(0, 5).map((x, i) => {
                                return(
                                    <DayCard
                                        key = {i}
                                        day={i}
                                        tempMin={props.responseObj.daily[i].temp.min}
                                        dayTemp={props.responseObj.daily[i].temp.day}
                                        tempMax={props.responseObj.daily[i].temp.max}
                                        main={props.responseObj.daily[i].weather[0].main}
                                        desc={props.responseObj.daily[i].weather[0].description}
                                        icon={props.responseObj.daily[i].weather[0].icon}
                                        sunrise={props.responseObj.daily[i].sunrise}
                                        sunset={props.responseObj.daily[i].sunset}
                                        humidity={props.responseObj.daily[i].humidity}
                                        wind_speed={props.responseObj.daily[i].wind_speed}
                                        moon_phase={props.responseObj.daily[i].moon_phase}
                                    />
                                );
                            })
                        }
                    </div>
                </>
            );
        } catch(e) {
            //console.log(e);
            return null;
        }
    } else{
        return (
            <div className={Loader}></div>
        )
    }

}

export default DayList;
