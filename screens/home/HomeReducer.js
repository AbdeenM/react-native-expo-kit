import { FETCH_HOME, UPDATE_HOME } from './HomeActions';

const INITIAL_STATE = {
	result: {
		data: [],
		message: '',
		error: false
	},
	isFetched: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case `${FETCH_HOME}_PENDING`:
			return INITIAL_STATE;

		case `${FETCH_HOME}_FULFILLED`:
			return {
				result: action.payload,
				isFetched: true
			};

		case `${UPDATE_HOME}_PENDING`:
			return INITIAL_STATE;

		case `${UPDATE_HOME}_FULFILLED`:
			return {
				result: action.payload,
				isFetched: true
			};
		default:
			return state;
	}
}
