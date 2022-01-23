import React, { Component } from 'react';
import LineChart from '../../components/LineChart';
import Button from 'react-bootstrap/Button';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class ReportPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      modal: false,
      labels: [],
      tdata: [],
      hdata: [],
      pdata: [],
      cdata: [],
    };

    this.toggle = this.toggle.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDayChange = (day) => {
    this.setState({ selectedDay: day });
  }

  getStat(type) {
    var start, end, d;

    if (type === 'yesterday') {
      var yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toString();
      start = new Date(yesterday).setHours(0, 0, 0, 0).valueOf();
      end = new Date(yesterday).setHours(23, 59, 59, 999).valueOf();

      fetch(`http://127.0.0.1:8000/api/weather/stat?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
          this.setState(() => ({
            labels: data.temperature.map(item => new Date(item.ts).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })).reverse().filter((item, i) => i % 8 === 0),
            tdata: data.temperature.map(item => item.value).reverse().filter((item, i) => i % 8 === 0),
            hdata: data.humidity.map(item => item.value).reverse().filter((item, i) => i % 8 === 0),
            pdata: data.pressure.map(item => item.value).reverse().filter((item, i) => i % 8 === 0),
            cdata: data.coppm.map(item => item.value).reverse().filter((item, i) => i % 8 === 0)
          }))
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else if (type === 'lastweek') {
      d = new Date();
      // set to Monday of this week
      d.setDate(d.getDate() - (d.getDay() + 6) % 7);
      // set to previous Monday
      var sunday = d.setDate(d.getDate() - 1);
      var monday = d.setDate(d.getDate() - 6);
      start = new Date(monday).setHours(0, 0, 0, 0).valueOf();
      end = new Date(sunday).setHours(23, 59, 59, 999).valueOf();

      fetch(`http://127.0.0.1:8000/api/weather/stat?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
          this.setState(() => ({
            labels: data.temperature.map(item => new Date(item.ts).toLocaleDateString('vi-VN', { month: "numeric", day: "numeric" })).reverse().filter((item, i) => i % 47 === 0),
            tdata: data.temperature.map(item => item.value).reverse().filter((item, i) => i % 47 === 0),
            hdata: data.humidity.map(item => item.value).reverse().filter((item, i) => i % 47 === 0),
            pdata: data.pressure.map(item => item.value).reverse().filter((item, i) => i % 47 === 0),
            cdata: data.coppm.map(item => item.value).reverse().filter((item, i) => i % 47 === 0),
          }))
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    } else if (type === 'date') {
      d = this.state.selectedDay.toString();
      start = new Date(d).setHours(0, 0, 0, 0).valueOf();
      end = new Date(d).setHours(23, 59, 59, 999).valueOf();

      fetch(`http://127.0.0.1:8000/api/weather/stat?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
          this.setState(() => ({
            labels: data.temperature.map(item => new Date(item.ts).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })).reverse().filter((item, i) => i % 8 === 0),
            tdata: data.temperature.map(item => item.value).reverse().filter((item, i) => i % 8 === 0),
            hdata: data.humidity.map(item => item.value).reverse().filter((item, i) => i % 8 === 0),
            pdata: data.pressure.map(item => item.value).reverse().filter((item, i) => i % 8 === 0),
            cdata: data.coppm.map(item => item.value).reverse().filter((item, i) => i % 8 === 0)
          }))
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  render() {
    const { classes } = this.props;
    const { selectedDay } = this.state;
    return (
      <div>
        <div className={classes.buttonContainer}>
          <Button variant="primary" size="lg" onClick={() => { this.getStat('yesterday') }}>
            Yesterday report
          </Button>
          <Button variant="primary" size="lg" onClick={() => { this.toggle() }}>
            Date report
          </Button>
          <Button variant="primary" size="lg" onClick={() => { this.getStat('lastweek') }}>
            Last week report
          </Button>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Date Report</ModalHeader>
          <ModalBody>
            {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
            {!selectedDay && <p>Choose a day</p>}
            <DayPickerInput onDayChange={this.handleDayChange} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => { this.toggle(); this.getStat('date') }}>Confirm</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {
          this.state.labels.length !== 0
          &&
          <div className={classes.chartContainer}>
            <LineChart labels={this.state.labels} data={this.state.tdata} title='Temperature: > 27: hot, 20 - 27: good, T < 20: cold' />
            <LineChart labels={this.state.labels} data={this.state.hdata} title='Humidity: > 70: moist, 40 - 60: optimum, H < 30: dry' />
            <LineChart labels={this.state.labels} data={this.state.pdata} title='Pressure: Normal atmospheric pressure is defined as 1 atm. Pressure varies based on the height.' />
            <LineChart labels={this.state.labels} data={this.state.cdata} title='Co ppm: > 100: unhealthy, 51 - 100: medium, < 51: good' />
          </div>
        }
      </div>

    );
  }
}

export default withStyles(styles)(ReportPage);