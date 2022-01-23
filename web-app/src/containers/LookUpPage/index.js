import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Table
} from "reactstrap";
import { withStyles } from '@material-ui/core';
import styles from './styles';


class LookUpPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      data: null,
      error: null
    };
  }

  handleInputChange = (e) => {
    this.setState({ city: e.target.value });
  }

  onSubmit = () => {
    this.setState({ error: null, data: null })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=2dc2905b246babebad9249c894ad682c&units=imperial`)
      .then(async (res) => {
        const resData = await res.json();
        if (res.ok) {
          this.setState({ data: resData })
        } else {
          this.setState({ error: resData.message });
        }
      })
      .catch(error => {
        this.setState({ error: error });
      })
  }

  renderError = () => {

    const { classes } = this.props;

    return (
      <div className={classes.error}>
        This city is invalid!
      </div>
    )
  }

  renderWeatherData = () => {

    const { classes } = this.props;
    const data = this.state.data;

    const kelvin = (((data.main.temp - 32) / 1.8) + 273.15).toFixed(2);
    const celsius = ((data.main.temp - 32) / (9 / 5)).toFixed(2);

    return (
      <Row className={classes.weather}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <h2>{data.name} - {data.sys.country}</h2>
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <span>{data.weather[0].main}</span>&nbsp;
          <span>{Math.floor(data.main.temp)}&deg;F</span>
          <Table>
            <tbody>
              <tr>
                <td>Wind</td>
                <td>{Math.floor(data.wind.speed)} km/h</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{Math.floor(data.main.pressure)} hPa</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{Math.floor(data.main.humidity)}%</td>
              </tr>
              <tr>
                <td>Temp</td>
                <td>
                  <span>{kelvin}K</span><br />
                  <span>{data.main.temp}&#8457;</span><br />
                  <span>{celsius}&#8451;</span><br />
                </td>
              </tr>
              <tr>
                <td>Min Temp</td>
                <td>{Math.floor(data.main.temp_min)}&deg;F</td>
              </tr>
              <tr>
                <td>Max Temp</td>
                <td>{Math.floor(data.main.temp_max)}&deg;F</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }

  render() {

    const { classes } = this.props;

    return (
      <Container fuild="true" className={classes.centered}>
        <Row>
          <Col>
            <Jumbotron>
              <InputGroup className={classes.inputgroup}>
                <div className={classes.input}>
                  <Input
                    placeholder="Enter city name..."
                    value={this.state.city}
                    onChange={this.handleInputChange}
                  />
                  <InputGroupAddon addonType="append" />
                  <Button color="primary" onClick={this.onSubmit}>
                    Search
                  </Button>
                </div>
              </InputGroup>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={classes.title}>Current Weather</h1>
          </Col>
        </Row>
        {this.state.error !== null && this.renderError()}
        {this.state.data !== null && this.renderWeatherData()}
      </Container>
    );
  }
}

export default withStyles(styles)(LookUpPage);