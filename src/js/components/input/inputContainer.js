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
  }
  changeTime(e) {
    if (e.target.id === 'departure') {
      this.modifyStates({leaveTime: Number(e.target.value)});
      if (e.target.value >= this.state.returnTime) {
        if (Number(e.target.value) + 1 > 23) {
          this.modifyStates({returnTime: 23});
        } else {
          this.modifyStates({returnTime: Number(e.target.value) + 1});
        }
      }
    } else if (e.target.id === 'return'){
      this.modifyStates({returnTime: Number(e.target.value)});
      if (e.target.value <= this.state.leaveTime) {
        if (Number(e.target.value) - 1 < 0) {
          this.modifyStates({leaveTime: 0});
        } else {
          this.modifyStates({leaveTime: Number(e.target.value) - 1});
        }
      }
    }
  }
  changeTemp(e) {
    if (e.target.id === 'minimum') {
      this.modifyStates({minTemp: Number(e.target.value)});
      if (e.target.value >= this.state.maxTemp) {
        this.modifyStates({maxTemp: Number(e.target.value) + 1});
      }
    } else if (e.target.id === 'maximum'){
      this.modifyStates({maxTemp: Number(e.target.value)});
      if (e.target.value <= this.state.minTemp) {
        this.modifyStates({minTemp: Number(e.target.value) + 1});
      }
    }
  }
  changeChance(e) {
    this.modifyStates({chance: e.target.value});
  }
  modifyStates(state) {
    this.setState(state);
    weatherActions.modifyState(state);
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
