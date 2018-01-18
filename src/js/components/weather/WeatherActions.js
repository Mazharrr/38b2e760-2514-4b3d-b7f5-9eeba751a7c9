import {dispatcher} from 'js/dispatcher';

class WeatherActions {
	//actions passes off data to the store
	initialize(){
		return null
	}
	processData(data){

	}
	modifyState(state){
		return state;
	}

}
export const weatherActions = dispatcher.createActions(WeatherActions);
