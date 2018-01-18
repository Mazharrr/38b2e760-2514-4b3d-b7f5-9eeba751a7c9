import {dispatcher} from 'js/dispatcher';

class WeatherActions {
	//actions passes off data to the store
	initialize(){
		return null
	}
	processData(data){
		console.log(data)
	}

}
export const weatherActions = dispatcher.createActions(WeatherActions);
