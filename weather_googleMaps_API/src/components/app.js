import React, { Component } from 'react';
import SearchBar from '../containers/search-bar'; //l.52
import WeatherList from '../containers/weather-list'; //l.61

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
