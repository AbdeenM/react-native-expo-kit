import axios from 'axios';
import Constants from 'expo-constants';

axios.defaults.baseURL = `${Constants.manifest.extra.serverURL}/api`;

class ApplicationApi {
	constructor() {
		this.path = '/application';
	};

	fetchHome = async (args) => {
		try {
			const { data } = await axios.post(`${this.path}/fetchHome`, args);
			return data;
		} catch (error) {
			throw error;
		};
	};

	updateHome = async (args) => {
		try {
			const { data } = await axios.post(`${this.path}/updateHome`, args);
			return data;
		} catch (error) {
			throw error;
		};
	};
};

export { ApplicationApi };