# ![alt text](https://github.com/AbdeenM/react-native-expo-kit/blob/master/icon.png) React Native Expo Kit - October 2019

[![Status](https://img.shields.io/badge/build-passing-green.svg?branch=master)](https://github.com/AbdeenM/react-native-expo-kit)
[![React Native](https://img.shields.io/badge/React%20Native-v0.57.8-blue.svg?logo=react)](https://facebook.github.io/react-native/)
[![Expo](https://img.shields.io/badge/Expo-SDK35.0.0-black.svg?logo=expo)](https://expo.io/)
[![React Redux V7](https://img.shields.io/badge/Redux-v7.1.1-purple.svg?logo=redux)](https://react-redux.js.org/)
[![React Navigation V3](https://img.shields.io/badge/React%20Navigation-v3.13.0-blue.svg?logo=react)](https://reactnavigation.org/)
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)](http://mit-license.org/)

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate using [Expo](https://expo.io/) that you can use to save you a couple of days worth of setup.

This boilerplate capitalizes on the use of [Redux](https://react-redux.js.org/), [React Navigation](https://reactnavigation.org/) and it follows Expo's initial project layout that is resulted from invoking `expo init` to create your project,
providing you a great and optimized `file structure`, `organized directories`, a great way to maintain your actions/reducers as well as your assets, configs, etc.

**This is just my personal structure of most of my projects, thought i might save someone a couple of days :)**

## Utilities

* [Expo](https://expo.io/)
* [React Native](facebook.github.io/react-native/)
* [Axios](https://github.com/axios/axios/) for your API calls
* [React Navigation](https://reactnavigation.org/) for managing application navigation
* [Redux](https://redux.js.org/) for managing your application states
* [React Persist](https://github.com/rt2zz/redux-persist/) for presisting Redux states
* [React Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware/) for simple yet robust handling of async action creators in Redux
* [Redux Thunk](https://github.com/reduxjs/redux-thunk/) a redux middleware for redux side effects logic, including complex synchronous logic that need access to the store
* [React Native Paper](https://reactnativepaper.com/) for your components and UI styling

## Features Build-In

* **Authentication Flow** - Already setup flow of authentication
* **Theming** - A build-in theming compatability enabling light and dark modes that utilies Redux and React Native Paper. You can change the coloring, set new theme properties in `config/theme/Themes.js`
* **API Endpoints** - Use this file to make HTTP requests to your server and retrive data, you can get more information in `config/Api.js`
* **Permissions** - Use this to access/add all [Expo Permissions](https://docs.expo.io/versions/latest/sdk/permissions/), you can get more information in `config/Permisions.js`

## Structure Layout

```
./react-native-expo-kit
            |--- package.json     <=========================== Contains all your project settings, packages, etc.
            |--- app.json     <================================ Contains your application settings (i.e. Manifest, etc.)
            |--- App.js        <=============================== Root application component
            |--- assets/        <============================== All your assets go here
                    |--- fonts/     <========================== All your fonts go here
                            |--- SpaceMono-Regular.ttf      <== Example of a font file
                    |--- images/      <======================== All your images go here
                            |--- icon.png     <================ Example of an image file
            |--- config/      <================================ All your configuration files go here
                    |--- theme/     <========================== Contains Theme.js, Theme actions and reducer
                    |--- Api.js     <========================== Contains your HTTP functions for any server side calls
                    |--- Permissions      <==================== Contains all Expo device permissions
            |--- navigation/      <============================ Contains your root naivgation files
                    |--- AppNavigator.js      <================ Contains the main application navigation scheme
                    |--- AppNavigator.web.js      <============ Contains the main web application navigation scheme
                    |--- AuthNavigator.js     <================ Contains the main stack of authentication screens
                    |--- MainNavigator.js     <================ Contains the main stack of the bottom tab navigation (can be changed to drawer, etc.)
                    |--- RootApplication.js     <============== Contains the root wrapper for AppNavigator, you can set any initial calls/functions here
            |--- redux/     <================================== All redux related files go here
                    |--- RootReducer.js     <================== Contains the combined reducers of all your reducers
                    |--- Store.js     <======================== Contains the Redux store scheme
            |--- screens/     <================================ All your application screens go here
                    |--- LoadingScreen.js           <========== Contains the main loading component and your application auth checking
                    |--- links/
                    |--- settings/
                    |--- auth/
                            |--- LoginScreen.js        <======= Contains the styling and component for your Login screen
                            |--- RegisterScreen.js          <== Contains the styling and component for your Register screen
                            |--- WelcomeScreen        <======== Contains the landing page for your application
                    |--- home/      <========================== Example of a screen directory
                            |--- HomeActions.js     <========== Contains all Home screen redux actions
                            |--- HomeReducer.js     <========== Contains Home screen reducer
                            |--- HomeScreen.js     <=========== Contains the Home screen react component and styling             
```

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [NPM](https://npmjs.com/) or [Yarn](https://https://yarnpkg.com/)
* A development enviroment setup with React Native and Expo, you can follow [these instructions](https://docs.expo.io/versions/v35.0.0/introduction/installation/)

## Getting Started

1. Clone or download this repo
            * Download by hitting that green `clone or download` green button on the top right corner
            * Clone by running this command on your chosen directory `git clone https://github.com/AbdeenM/react-native-expo-kit.git your project name`
2. Remove `.git` folder, by running `rm -rf .git`
3. Open `package.json` and change all the details as you need (author, repository, scripts, etc.)
4. Open `app.json` and configure all your application needs, see [these instructions](https://docs.expo.io/versions/latest/workflow/configuration/)
5. Finally, install all dependencies by running `npm install` or `yarn install` depending on your favourite package manager

## Project Status

Will be updating this with every major updates of related dependencies and Expo SDK releases, feel free to improve or contribute!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Released under the **[MIT License](http://mit-license.org/)**

Authored and Maintained by **[Abdeen Mohamed](https://github.com/AbdeenM)**
