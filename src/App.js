import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CAMPSITES } from './components/shared/campsites';

//console.log(CAMPSITES)//
class App extends Component { //INFO CENTER//
    constructor(props) {
        super(props);
        this.state = { //STATE GETS THE INFO//
            campsites: CAMPSITES,
        };
    }
    render() { //WHAT GETS RENDERED//
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} />
            </div>
        );
    }
}

export default App;