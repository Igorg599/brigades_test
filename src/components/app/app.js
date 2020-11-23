import React from 'react';
import Background from './unnamed.jpg';
import List from '../list/list';
import AppHeader from '../app-header/app-header';

import './app.scss';

const App = () => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <List/>
        </div>
    )
}
export default App;