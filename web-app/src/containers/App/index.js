import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import configureStore from '../../redux/configureStore';
import LayoutRoute from '../../commons/LayoutRoute';
import styles from './styles.js';
import { ROUTES } from '../../constants/routes'
import theme from '../../commons/Theme';
import { ToastContainer } from 'react-toastify';

const store = configureStore();

class App extends Component {

  renderLayoutRoute() {
    let xhtml = null;
    xhtml = ROUTES.map(route => {
      return (
        <LayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <Switch>
              {this.renderLayoutRoute()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default withStyles(styles)(App);
