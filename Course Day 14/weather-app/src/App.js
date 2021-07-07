import './App.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from './api/config'
import CitySelector from './components/CitySelector';
import WeatherList from './components/WeatherList';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    // clear old search
    setData(null);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // error handling for nonexistent data
        setIsLoading(false);
        if (data.cod >= 400) {
          setError(data.message);
          return;
        }
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  const getUI = () => {
    if (error) return <h2>Error when fetching: {error}</h2>
    if (!data && isLoading) return <h2>LOADING...</h2>
    if (!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=15&units=metric&appid=${API_KEY}`)} />

      {data && <h5>Searched for: {data?.city.name}</h5>}

      {/* conditionally render  */}
      {getUI()}
    </Container>
  );
}

export default App;
