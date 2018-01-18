import React from 'react';

import InputTime from './inputTime';
import InputDegrees from './inputDegrees';
import InputChance from './inputChance';

import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

class InputContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = weatherStore.getState();
    this.changeTime = this.changeTime.bind(this);
    this.changeTemp = this.changeTemp.bind(this);
    this.changeChance = this.changeChance.bind(this);
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }
  storeDidUpdate() {
    this.setState(weatherStore.getState());
  }
  changeTime(e) {
    if (e.target.id === 'departure') {
      weatherActions.modifyState({leaveTime: Number(e.target.value)});
      if (e.target.value >= this.state.returnTime) {
        if (Number(e.target.value) + 1 > 23) {
          weatherActions.modifyState({returnTime: 23});
        } else {
          weatherActions.modifyState({returnTime: Number(e.target.value) + 1});
        }
      }
    } else if (e.target.id === 'return'){
      weatherActions.modifyState({returnTime: Number(e.target.value)});
      if (e.target.value <= this.state.leaveTime) {
        if (Number(e.target.value) - 1 < 0) {
          weatherActions.modifyState({leaveTime: 0});
        } else {
          weatherActions.modifyState({leaveTime: Number(e.target.value) - 1});
        }
      }
    }
  }
  changeTemp(e) {
    if (e.target.id === 'minimum') {
      weatherActions.modifyState({minTemp: Number(e.target.value)});
      if (e.target.value >= this.state.maxTemp) {
        weatherActions.modifyState({maxTemp: Number(e.target.value) + 1});
      }
    } else if (e.target.id === 'maximum'){
      weatherActions.modifyState({maxTemp: Number(e.target.value)});
      if (e.target.value <= this.state.minTemp) {
        weatherActions.modifyState({minTemp: Number(e.target.value) + 1});
      }
    }
  }
  changeChance(e) {
    weatherActions.modifyState({chance: e.target.value});
  }
  render(){
    return (
      <div>
        <div className="container">
          <InputTime
            direction="departure"
            currValue={this.state.leaveTime}
            onChange={this.changeTime}/>
          <InputTime
            direction="return"
            currValue={this.state.returnTime}
            onChange={this.changeTime}/>
        </div>
        <div className="container">
          <InputDegrees
            minOrMax="minimum"
            currValue={this.state.minTemp}
            onChange={this.changeTemp}/>
          <InputDegrees
            minOrMax = "maximum"
            currValue={this.state.maxTemp}
            onChange={this.changeTemp}/>
        </div>
        <div className="container">
          <InputChance
            currValue={this.state.chance}
            onChange={this.changeChance}/>
        </div>
      </div>
    );
  }
}

export default InputContainer;
