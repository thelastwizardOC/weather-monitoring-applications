import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import styles from './styles';

const menuId = 'primary-search-account-menu';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleProfileMenuOpen = e => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
      </Menu>
    );
  };

  handleToggleSidebar = () => {
    const { showSidebar, onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(!showSidebar);
    }
  };

  render() {
    const { classes } = this.props;
    const name = "Weather Monitoring System";
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

            </div>
          </Toolbar>
        </AppBar>
        {this.renderMenu()}
      </div>
    );
  }
}

export default withStyles(styles)(Header);