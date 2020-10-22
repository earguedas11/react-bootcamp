import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//console.log(CAMPSITES)//
class App extends Component { //INFO CENTER//
    render() { //WHAT GETS RENDERED//
        return (
            <BrowserRouter>
            <div className="App">
                <Main />
            </div>
            </BrowserRouter>
        );
    };
}

export default App;