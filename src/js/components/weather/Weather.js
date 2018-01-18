//Vendor
import React, {Component} from 'react';
//Locals
import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

import {getApiData} from 'js/utils/api';
import {viewOptions} from 'js/config';

import InputContainer from '../input/inputContainer';

export default class Body extends Component {
  constructor(props){
		super(props);
		this.state = weatherStore.getState();
		weatherStore.listen(this.storeDidUpdate.bind(this));
	}

  /*
    get api data when the component mounts
  */
  componentDidMount() {
    // Subscribe to the store for updates
    let apiData = getApiData();
    console.log(apiData);
    weatherActions.initialize(); //initialize store
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  render () {

    return (
      <InputContainer />
    );
  }
}
