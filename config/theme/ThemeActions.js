import { StatusBar } from 'react-native'

import { lightTheme, darkTheme } from './Themes';

export const SWITCH_THEME = 'SWITCH_THEME';

function onSwichTheme(dark) {
	if (dark) {
		StatusBar.setBarStyle('dark-content')
		return lightTheme
	} else {
		StatusBar.setBarStyle('light-content')
		return darkTheme
	};
};

export const switchTheme = theme => ({
	type: SWITCH_THEME,
	payload: onSwichTheme(theme)
});
