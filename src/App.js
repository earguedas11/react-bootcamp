import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

//console.log(CAMPSITES)//
class App extends Component { //INFO CENTER//
    render() { //WHAT GETS RENDERED//
        return (
            <div className="App">
                <Main />
            </div>
        );
    };
}

export default App;