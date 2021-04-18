import React from 'react';
import './weathercard.css';
import umbrella from './icons8-umbrella-with-rain-drops-48.png';

function WeatherCard(props) {
    return (
        <div className="weatherCard">
            <p>{props.weekDay}</p>
            <img src={props.image} alt={props.image} className="weatherPicture" />
            <p>{props.tempeture}</p>
            <p className="rainContainer"><span className="rain">{props.raining}</span><img src={umbrella} alt="icons8-umbrella-with-rain-drops" className="umbrella" /></p>
        </div>
    )
}

export default WeatherCard

