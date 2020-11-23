import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import BrigadesServiceContext from './components/brigades-service-context/brigades-service-context';
import GetBrigades from './services/brigades-services';
import ErrorBoundry from './components/error-boundry';
import {Provider} from 'react-redux';
import store from './store';


import './index.scss';

const getBrigades = new GetBrigades();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BrigadesServiceContext.Provider value={getBrigades}>
        <App/>
      </BrigadesServiceContext.Provider>
    </ErrorBoundry>
    </Provider>
, document.getElementById('root'));
