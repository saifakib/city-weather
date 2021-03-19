

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
};

export class GoogleMap extends Component {

render() {
    const { lat, lng } = this.props
    return (
        <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={
                {
                    lat: lat,
                    lng: lng
                }
            }
        />
    );
}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzREBBwOPGlDA1XWBC-53dwtG7emNyGlM'
})(GoogleMap);