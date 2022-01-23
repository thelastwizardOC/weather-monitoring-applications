import React, { useState, useEffect } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import locationIcon from '../../../assets/images/location-pin.png';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const DateTime = ({ classes }) => {

  const [day, setDay] = useState('');
  const [dateMonth, setDateMonth] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12Format = hour >= 13 ? hour % 12 : hour;
      const minutes = String(time.getMinutes()).padStart(2, "0");
      const ampm = hour >= 12 ? 'PM' : 'AM';

      setTime(`${hoursIn12Format}:${minutes} ${ampm}`);
      setDateMonth(`${months[month]} ${date}`);
      setDay(`${days[day]}`);
    }, 1000)
    return () => { clearInterval(timer) }
  }, [])


  return (
    <div className={`${classes.Container} d-flex`}>
      <div className={classes.Img}></div>
      <div className={classes.Gradient}></div>
      <div className={`${classes.CardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
        <div>
          <h2 className={classes.Bold}>{day}</h2>
          <p className={`${classes.DateMonth} mb-0`}>{dateMonth}</p>
          <p className="d-flex align-items-baseline font-weight-lighter mb-1">
            <img width="10" height="15" className="mr-1" src={locationIcon} alt='location pin icon'></img>
            <span>&nbsp; Ho Chi Minh City</span>
          </p>
        </div>
        <div>
          <h2 className={classes.Bold}>
            <span>{time}</span>
          </h2>
        </div>
      </div>
    </div>
  )
};

export default withStyles(styles)(DateTime);