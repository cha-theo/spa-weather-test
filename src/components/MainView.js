import React, { useState } from "react";
import axios from "axios";
import { Card, ListGroup, Container } from "react-bootstrap";

const MainView = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=c6f5755324365a40f63c71bcd226ad70`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <Container className="text-center">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter city..."
            type="text"
          />
        </div>
        {data.city != undefined && (
          <Card style={{ width: "20rem", margin: "auto" }}>
            <Card.Body>
              <h3>
                {data.city ? data.city.name : null} |{" "}
                {data.city ? data.city.country : null}{" "}
              </h3>
              <h2>{data.list ? data.list[0].main.temp : null} °C</h2>
              <Card.Img
                variant="top"
                src={
                  data.list
                    ? `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`
                    : null
                }
              />

              <Card.Text>
                The city of {data.city ? data.city.name : null} is located in{" "}
                {data.city ? data.city.country : null}
                <br />
                Population: {data.city ? data.city.population : null}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Humidity: {data.list ? data.list[0].main.humidity : null} %
              </ListGroup.Item>
              <ListGroup.Item>
                Feels like: {data.list ? data.list[0].main.feels_like : null} °C
              </ListGroup.Item>
              <ListGroup.Item>
                Min: {data.list ? data.list[0].main.temp_min : null} °C
              </ListGroup.Item>
              <ListGroup.Item>
                Max: {data.list ? data.list[0].main.temp_max : null} °C
              </ListGroup.Item>
              <ListGroup.Item>
                Pressure: {data.list ? data.list[0].main.pressure : null} hPa
              </ListGroup.Item>
              <ListGroup.Item>
                Wind: {data.list ? data.list[0].wind.speed : null} m/s
              </ListGroup.Item>
            </ListGroup>
          </Card>
        )}
      </Container>
    </>
  );
};

export default MainView;
