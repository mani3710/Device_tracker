/**
 * @format
 */

import {AppRegistry, View,Text} from 'react-native';

import {name as appName} from './app.json';
import Home from './src/screen/home';
import Root from './src';

AppRegistry.registerComponent(appName, () => Root);
