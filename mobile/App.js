import React from 'react';
import { Text, View } from 'react-native';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Routes from './src/routes';
import logImg from './src/assets/logo.png'

export default function App() {
  return (
    <Routes />
  );
}