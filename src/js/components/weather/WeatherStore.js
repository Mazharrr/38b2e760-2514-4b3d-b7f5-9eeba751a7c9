/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';

class WeatherStore {
	constructor () {
    this.init = false

		this.bindListeners({
			initialize: weatherActions.initialize,
			processData: weatherActions.processData
		});
	}

	initialize(){
    this.init = true;
	}

	processData(data) {
		console.log(data);
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
