import React from 'react';

import InputTime from './inputTime';
import InputDegrees from './inputDegrees';
import InputChance from './inputChance';

import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

class InputContainer extends React.Component {
  constructor(props){
    super(props);
    //pull state from redux store
    this.state = weatherStore.getState();

    //scoping purposes
    this.changeTime = this.changeTime.bind(this);
    this.changeTemp = this.changeTemp.bind(this);
    this.changeChance = this.changeChance.bind(this);

    //updates state on changes to store
    weatherStore.listen(this.storeDidUpdate.bind(this));
  }
  storeDidUpdate() {
    //updates state on changes to store
    this.setState(weatherStore.getState());
  }
  changeTime(e) {
    //input range for travel time modifies redux store
    if (e.target.id === 'departure') {
      weatherActions.modifyState({leaveTime: Number(e.target.value)});
      //adjusts the return time so it's higher than departure time
      if (e.target.value >= this.state.returnTime) {
        //edge case, capping return state at 23 hours
        if (Number(e.target.value) + 1 > 23) {
          weatherActions.modifyState({returnTime: 23});
        } else {
          weatherActions.modifyState({returnTime: Number(e.target.value) + 1});
        }
      }
    } else if (e.target.id === 'return'){
      weatherActions.modifyState({returnTime: Number(e.target.value)});
      //adjusts the departure time so it's lower than return time
      if (e.target.value <= this.state.leaveTime) {
        //edge case, lower-capping departure time at 0 hours
        if (Number(e.target.value) - 1 < 0) {
          weatherActions.modifyState({leaveTime: 0});
        } else {
          weatherActions.modifyState({leaveTime: Number(e.target.value) - 1});
        }
      }
    }
  }
  changeTemp(e) {
    //change redux store accordingly
    if (e.target.id === 'minimum') {
      weatherActions.modifyState({minTemp: Number(e.target.value)});
      if (e.target.value >= this.state.maxTemp) {
        //ensures max range is higher than min rage
        weatherActions.modifyState({maxTemp: Number(e.target.value) + 1});
      }
    } else if (e.target.id === 'maximum'){
      weatherActions.modifyState({maxTemp: Number(e.target.value)});
      if (e.target.value <= this.state.minTemp) {
        //ensures min range is lower than max range
        weatherActions.modifyState({minTemp: Number(e.target.value) - 1});
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
            isInit={this.state.init}
            direction="departure"
            currValue={this.state.leaveTime}
            onChange={this.changeTime}/>
          <InputTime
            isInit={this.state.init}
            direction="return"
            currValue={this.state.returnTime}
            onChange={this.changeTime}/>
        </div>
        <div className="container">
          <InputDegrees
            isInit={this.state.init}
            minOrMax="minimum"
            currValue={this.state.minTemp}
            onChange={this.changeTemp}/>
          <InputDegrees
            isInit={this.state.init}
            minOrMax = "maximum"
            currValue={this.state.maxTemp}
            onChange={this.changeTemp}/>
        </div>
        <div className="container">
          <InputChance
            isInit={this.state.init}
            currValue={this.state.chance}
            onChange={this.changeChance}/>
        </div>
      </div>
    );
  }
}

export default InputContainer;
