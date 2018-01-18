import React from 'react';

import Results from './results';

import { weatherStore } from 'js/components/weather/WeatherStore';

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = weatherStore.getState();
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }

  storeDidUpdate() {
    this.setState(weatherStore.getState());
  }
  render() {
    return (
      <div className="container">
        <Results
          bikeWeather={this.state.bikeWeather}
          reasons={this.state.reasons}
        />
      </div>
    );
  }
}

export default ResultsContainer;
