/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';

class WeatherStore {
	constructor () {
	this.init = false
	this.minTemp = 50;
	this.maxTemp = 80;
	this.leaveTime = 8;
	this.returnTime = 17;
	this.chance = 20;

		this.bindListeners({
			initialize: weatherActions.initialize,
			processData: weatherActions.processData,
			modifyState: weatherActions.modifyState
		});
	}

	initialize(){
	this.init = true;
	console.log(this.state)
	}

	processData(data) {
		console.log('ran');
		console.log(this.state)
	}
	modifyState(state){
		this.setState(state);
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
