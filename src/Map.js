import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import AnyReactComponent from './AnyReactComponent';
// import MarkerInfoWindow from './MarkerInfoWindow';

const Map = () => {

  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33})
  const [zoom, setZoom] = useState(11);
  const [show, setShow] = useState('false');

  // Map.defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11,
  //   show: false
  // };
  
  // const [show, setShow] = useState('false');

  const handleClose = () => this.setState({show: false})
  const _onChildClick = (key, childProps) => {this.setState({ show: !show })}

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.Maps }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChildClick={_onChildClick}
      >
      <Marker>
        lat={ 59.95}
        lng{ 30.33}
        show={show}
      </Marker>
     
      </GoogleMapReact>

    </div>
  );
  }

export default Map;
