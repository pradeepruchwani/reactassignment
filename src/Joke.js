import React from 'react';
import './Joke.css'

function Joke({ joke }) {
  return (
    <div className="joke">
      <img src={joke.icon_url} alt="Chuck Norris Icon" />
      <p>{joke.value}</p>
    </div>
  );
}

export default Joke;
