import { ApplicationApi } from '../../config/Api';

const applicationApi = new ApplicationApi();

export const FETCH_HOME = 'FETCH_HOME';
export const UPDATE_HOME = 'UPDATE_HOME';

export const fetchHome = args => ({
	type: FETCH_HOME,
	payload: applicationApi.fetchHome(args)
});

export const updateHome = args => ({
	type: UPDATE_HOME,
	payload: applicationApi.updateHome(args)
});
