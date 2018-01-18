import React from 'react';
import InputTime from './inputTime';
import InputDegrees from './inputDegrees';
import InputChance from './inputChance';

class InputContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      leaveTime: 8,
      returnTime: 17,
      minTemp: 50,
      maxTemp: 80,
      chance: 20
    };
    this.changeTime = this.changeTime.bind(this);
    this.changeTemp = this.changeTemp.bind(this);
    this.changeChance = this.changeChance.bind(this);
  }
  changeTime(e) {
    if (e.target.id === 'departure') {
      this.setState({leaveTime: Number(e.target.value)});
      if (e.target.value >= this.state.returnTime) {
        if (Number(e.target.value) + 1 > 23) {
          this.setState({returnTime: 23});
        } else {
          this.setState({returnTime: Number(e.target.value) + 1});
        }
      }
    } else if (e.target.id === 'return'){
      this.setState({returnTime: Number(e.target.value)});
      if (e.target.value <= this.state.leaveTime) {
        if (Number(e.target.value) - 1 < 0) {
          this.setState({leaveTime: 0});
        } else {
          this.setState({leaveTime: Number(e.target.value) - 1});
        }
      }
    }
  }
  changeTemp(e) {
    if (e.target.id === 'minimum') {
      this.setState({minTemp: Number(e.target.value)});
      if (e.target.value >= this.state.maxTemp) {
        this.setState({maxTemp: Number(e.target.value) + 1});
      }
    } else if (e.target.id === 'maximum'){
      this.setState({maxTemp: Number(e.target.value)});
      if (e.target.value <= this.state.minTemp) {
        this.setState({minTemp: Number(e.target.value) + 1});
      }
    }
  }
  changeChance(e) {
    this.setState({chance: e.target.value});
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
