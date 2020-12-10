import React from 'react';
import { Provider } from 'react-redux';

import store from './store'

import Countdown from "./components/Countdown";

function App() {
  return (
    <Provider store={store}>
      <Countdown />
    </Provider>
  );
}

export default App;
