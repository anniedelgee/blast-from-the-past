import React from 'react';
import './player.css';
import { Card } from 'react-bootstrap';
// import radio from 'public/radio-spotify.png';

const SpotifyPlaylistCard = ({ playlistUrl }) => {
  const playlistId = playlistUrl.split('/').pop();

  return (
    <div className='container'>
      {/* <img src={radio} alt='Pink old style Radio'/> */}
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}`}
          width="88.5%"
          height="60%"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
    </div>
  );
};

export default SpotifyPlaylistCard;

































