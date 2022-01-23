const styles = theme => ({

  dropDownIcon: {
    marginLeft: '30%'
  },

  list: {
    margin: '0 !important',
    padding: '0 !important'
  },

  subMenuBtn: {
    width: '100%',
    margin: '0 !important',
    padding: '0 !important'
  },

  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    height: '100%',
    position: 'relative',
  },

  menuLink: {
    width: '100%',
    textDecoration: 'none',
    color: theme.color.defaultTextColor,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
  },

  accordionSummary: {
    margin: '0 !important',
    padding: '0 !important'
  },

  subMenuLink: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
  },

  accordion: {
    margin: '0 !important',
    padding: '0 !important'
  },

  menuLinkActive: {
    '&>div': {
      color: 'rgb(25, 118, 210)',
      backgroundColor: 'rgba(25, 118, 210, 0.08)'
    },
  },

  subMenuItem: {
    justifyContent: 'center',
  }

});

export default styles;