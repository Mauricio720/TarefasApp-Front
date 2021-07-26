import React from 'react';
import {Switch} from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Login from './pages/Login';
import FirstUser from './pages/Users/FirstUser';
import RememberPass from './pages/RememberPass';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <RouteHandler exact path="/login">
                <Login/>
            </RouteHandler>

            <RouteHandler exact path="/first_user">
                <FirstUser/>
            </RouteHandler>

            <RouteHandler exact path="/remember_password/:tokenPass">
                <RememberPass/>
            </RouteHandler>
            
            <Main/>
            
          </Switch>
      </BrowserRouter>
  );
}

export default App;
