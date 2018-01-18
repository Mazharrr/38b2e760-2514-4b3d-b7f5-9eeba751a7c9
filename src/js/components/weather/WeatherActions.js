import {dispatcher} from 'js/dispatcher';
import {weatherStore} from './WeatherStore';
import {reasonsNotToBike} from '../../utils/helperFunctions';

class WeatherActions {
	//actions passes off data to the store
	initialize(){
		return null;
	}
	processData(data){
		//runs starting state through a helper function which will return
		//an an array of 'reasons' not to bike, if it's empty, bikeWeather will remain true
		const initialState = weatherStore.getState();
		const resultArr = reasonsNotToBike(data, initialState);
		if (resultArr.length) {
			return {weatherData: data, bikeWeather: false, reasons: resultArr};
		}
		return {weatherData: data, bikeWeather: true, reasons: []};
	}
	modifyState(state){
		//runs what ran in process data, but every single time a state change occurs
		const initialState = weatherStore.getState();
		const resultArr = reasonsNotToBike(initialState.weatherData, initialState);
		const canBike = !resultArr.length;
		const newState = Object.assign({}, initialState, {bikeWeather: canBike}, {reasons: resultArr}, state);
		return newState;
	}

}
export const weatherActions = dispatcher.createActions(WeatherActions);
