import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyPlayer from 'react-spotify-web-playback';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

// const spotifyAPI = new SpotifyWebApi ();
// spotifyAPI.setAccessToken('')


// fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`
//   }
// })
// .then(response => response.json())
// .then(({beats}) => {
//   beats.forEach((beat, index) => {
//     console.log(`Beat ${index} starts at ${beat.start}`);
//   })
// })


function player() {
    const CLIENT_ID = "ec9e3bf7156540ee920631601ba7424e"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"


    const Card = ({imageUrl, title, description}) => {
        return (
            <div className='card'>
                <img src={imageUrl} alt={title}/>
                <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                <p className='card-text'>{description}</p>
            </div>
            </div>
        );
    }
}

export default Player