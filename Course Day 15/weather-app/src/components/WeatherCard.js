import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ dateTime, temp_min, temp_max, main, icon }) => {
  // create a date object with Date class constructor
  // const date = new Date(dt);
  return (
    <Card>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {/* {date.toLocaleDateString()} - {date.toLocaleTimeString()} */}
          {dateTime}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min} &deg;C</p>
        {/* maximum temperature */}
        <p>Max: {temp_max} &deg;C</p>
      </Card.Body>
    </Card>
  );
};
export default WeatherCard;