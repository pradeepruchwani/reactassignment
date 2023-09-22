import React, { useState, useEffect } from 'react';
import Joke from './Joke';
import Error from './Error';
import './JokeList.css';
function JokeList() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    fetch('https://api.chucknorris.io/jokes/random/10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch jokes.');
        }
        return response.json();
      })
      .then((data) => {
        setJokes(data.value);
      })
      .catch((err) => {
        setError('Failed to fetch jokes. Please try again later.');
      });
  };

  return (
    <div className="joke-list">
      {error && <Error message={error} />}
      {jokes.map((joke) => (
        <Joke key={joke.id} text={joke.value} />
      ))}
      <button onClick={fetchJokes}>Load More Jokes</button>
    </div>
  );
}

export default JokeList;
