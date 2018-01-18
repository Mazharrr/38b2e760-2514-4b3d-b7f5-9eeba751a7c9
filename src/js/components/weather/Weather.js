//Vendor
import React, { Component } from 'react';
//Locals
import { weatherStore } from 'js/components/weather/WeatherStore';
import { weatherActions } from 'js/components/weather/WeatherActions';

import { getApiData } from 'js/utils/api';

import InputContainer from '../input/inputContainer';
import ResultsContainer from '../results/resultsContainer';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  /*
    get api data when the component mounts
  */
  componentDidMount() {
    // Subscribe to the store for updates
    const apiData = getApiData();

    //onload makes it wait for the data to finish loading before running it through our actions
    apiData.onload = function() {
      weatherActions.initialize(); //initialize store
      weatherActions.processData(JSON.parse(apiData.responseText));
    };
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState()); //triggers re-render when store updates
  };

  render() {
    return (
      <div>
        <InputContainer />
        <ResultsContainer />
      </div>
    );
  }
}
