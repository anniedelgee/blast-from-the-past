import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyPlayer from 'react-spotify-web-playback';

const spotifyAPI = new SpotifyWebApi ();
spotifyAPI.setAccessToken('')


fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({beats}) => {
  beats.forEach((beat, index) => {
    console.log(`Beat ${index} starts at ${beat.start}`);
  })
})


function player() {
  return (
    <div>player</div>
  )
}

export default player