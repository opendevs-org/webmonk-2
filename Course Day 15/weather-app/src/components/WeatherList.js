import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({ weathers }) => {
    // weathers => Array with 15 objects
    return (
        <Row md={4}>
            {weathers.map(({ dt_txt, dt, main, weather }) => (
                <Col className="p-2" key={dt}>
                    <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dateTime={dt_txt} main={weather[0].main} icon={weather[0].icon} />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;
