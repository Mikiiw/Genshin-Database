import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Nav/NavBar.js';
import Route from './components/Nav/Route.js';
import DataTable from './components/DataTable/DataTable.js';
import HomePage from './components/HomePage/Home.js';


const App = () => {

    return (
        <div style={{ backgroundColor: 'black' }}>
            <NavBar />
            <Route path="/">
                <HomePage />
            </Route>
            <Route path="/Tier">
                <DataTable />
            </Route>
            <Route path="/Characters">
                <DataTable />
            </Route>
        </div>
    )
}

export default App;