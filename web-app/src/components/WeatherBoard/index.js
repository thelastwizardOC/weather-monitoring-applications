import React from 'react';
import { withStyles } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.js';
import DateTime from './DateTime';
import WeatherDescription from './WeatherDescription';

const WeatherBoard = ({ data, classes }) => (
    <Container className={classes.Box}>
        <Row>
            <Col className={classes.Col} xs={12} md={4}>
                <div className={classes.Card}>
                    <DateTime />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <WeatherDescription data={data} />
            </Col>
        </Row>
    </Container>
);

export default withStyles(styles)(WeatherBoard);