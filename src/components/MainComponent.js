import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
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
                <Header />
                <Directory campsites={this.state.campsites} onClick={campsiteId=> this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
                <Footer />
            </div>
        );
    };
}

export default Main;