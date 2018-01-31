import React from 'react';
import axios from 'axios';

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
       console.log("Geolocation is not supported by this browser");
    }
}

function getPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    axios.get('http://api.amp.active.com/v2/search?query=running&category=event&start_date=2018-01-29..&near="+latlon+"&radius=25&api_key=abhuts68zaxbr39z4dfpav8m')
        .then(response => {
            console.log(response);
    } )
}

const race = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <ul>
                <li>Location: {props.city}, {props.state}</li>
                <li>Date: {props.date}</li>
                <li>Type: {props.type}</li>
            </ul>
        </div>
    )
};

export default race;

