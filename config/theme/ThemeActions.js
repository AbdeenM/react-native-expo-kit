import { lightTheme, darkTheme } from './Themes'

export const SWITCH_THEME = 'SWITCH_THEME'

function onSwichTheme(dark) {
	if (dark) {
		return lightTheme
	} else {
		return darkTheme
	}
}

export const switchTheme = theme => ({
	type: SWITCH_THEME,
	payload: onSwichTheme(theme)
})
