import React from 'react';

const InfoWindow = props => (
    props.show
      ? (
        <div style={{width: 100, height: 100}}>
          <div
            onClick={props.handleClose}
            style={{border: "1px solid black", position: "absolute", top: 5, right: 5}}
          >
            X
          </div>
          <div>
            {props.children}
          </div>
        </div>
      )
      : null
  )

  export default InfoWindow;