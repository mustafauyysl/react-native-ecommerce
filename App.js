import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
