/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';

class WeatherStore {
	constructor () {
	//initializing our state
	this.init = false
	this.minTemp = 50;
	this.maxTemp = 80;
	this.leaveTime = 8;
	this.returnTime = 17;
	this.chance = 20;
	this.weatherData = {};
	this.bikeWeather = true;
	this.reasons = [];

		this.bindListeners({
			initialize: weatherActions.initialize,
			processData: weatherActions.processData,
			modifyState: weatherActions.modifyState
		});
	}

	initialize(){
	this.init = true;
	}

	processData(data) {
		this.setState({weatherData: data.weatherData, bikeWeather: data.bikeWeather,reasons: data.reasons});
		//sets the state after retrieving API data
	}
	modifyState(state){
		this.setState(state);
		//sets state on modification
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
