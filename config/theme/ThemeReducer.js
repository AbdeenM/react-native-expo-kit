import { SWITCH_THEME } from './ThemeActions';
import { lightTheme, darkTheme } from './Themes';

const INITIAL_STATE = {
	...lightTheme
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case `${SWITCH_THEME}`:
			return {
				...action.payload
			};
		default:
			return state
	};
};
