import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

//console.log(CAMPSITES)//
class Main extends Component { //INFO CENTER//
    constructor(props) {
        super(props);
        this.state = { //STATE GETS THE INFO//
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId){
        this.setState({selectedCampsite: campsiteId})
    }

    render() { //WHAT GETS RENDERED//
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={campsiteId=> this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
            </div>
        );
    };
}

export default Main;