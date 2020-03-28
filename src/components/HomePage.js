import React, { Fragment, Component } from 'react';

import Header from './Header';
import Dropdown from './Dropdown';
import SearchBar from './SerachBar';
import Main from './Main';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background-color:${props =>
    props.theme.mode === 'dark' ? '#202d36' : '#EEE'};
  color:${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
}`;

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      theme: { mode: 'dark' },
      headerStyle: '#2b3743',
      cardColor: '#2b3743',
      textColor: '#ffffff',
      search: false
    };
  }

  darkModeHandler = () => {
    this.setState({
      theme:
        this.state.theme.mode === 'dark' ? { mode: 'white' } : { mode: 'dark' },
      headerStyle: this.state.headerStyle === '#ffffff' ? '#2b3743' : '#ffffff',
      cardColor: this.state.cardColor === '#ffffff' ? '#2b3743' : '#ffffff',
      textColor: this.state.textColor === 'black' ? '#ffffff' : 'black'
    });
  };

  searchHandler = bool => {
    this.setState({
      search: bool
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyle />
          <Fragment>
            <Header
              headerStyle={this.state.headerStyle}
              darkModeHandler={this.darkModeHandler}
              textColor={this.state.textColor}
            />
            <br></br>
            <br></br>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: 25,
                marginRight: 25
              }}
            >
              <SearchBar
                searchHandler={this.searchHandler}
                cardColor={this.state.cardColor}
                textColor={this.state.textColor}
              />
              <Dropdown />
            </div>
            <br></br>
            <br></br>
            {this.state.search === false && (
              <Main
                cardColor={this.state.cardColor}
                textColor={this.state.textColor}
              />
            )}
          </Fragment>
        </>
      </ThemeProvider>
    );
  }
}

export default HomePage;
