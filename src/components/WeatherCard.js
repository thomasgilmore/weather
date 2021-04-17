import React from 'react';
import './weathercard.css';

function WeatherCard(props) {
    return (
        <div className="card">
            <p>{props.weekDay}</p>
            <img src={props.image} alt={props.image} />
            <p>{props.tempeture}</p>
            <p>{props.raining}</p>
        </div>
    )
}

export default WeatherCard

