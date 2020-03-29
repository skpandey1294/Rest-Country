const styleSheet = {
  countryCard: {
    width: 320,
    marginBottom: 40,
    // marginRight: this.props.cardMargin,
    marginRight: 18,

    // backgroundColor: this.props.cardColor,
    backgroundColor: localStorage.getItem('cardColor'),

    border: 1,
    // color: this.props.textColor
    color: localStorage.getItem('textColor')
  },

  searchDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25
  },

  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: this.props.headerStyle,
    backgroundColor: localStorage.getItem('headerStyle'),
    paddingLeft: 45,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
  },

  headerHeading: { color: localStorage.getItem('textColor') },

  headerButton: {
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none'
  },

  darkModeButton: { color: localStorage.getItem('textColor') }
};

export default styleSheet;
