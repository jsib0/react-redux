import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
		case FETCH_WEATHER:
		return [ action.payload.data, ... state ]; // l.60

		//or 

		// return state.concat([action.payload.data]);; // l. 60 9:00
	}

	return state;
}