import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import customStyle from './customStyle.json';
import { containerStyle, center } from './config';
import { UPDATE_TABLE_MAP } from '../../reducer';
import pin from '../../assets/pin.png';
import pinned from '../../assets/pinned.png';
import { EqObject, Props } from '../../types';

const Map = ({
  eqs,
  state: { eqsIndex, selectedIndex, selectedId },
  dispatch,
}: Props) => (
  <LoadScript
    language="en"
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={
        selectedIndex === null
          ? center
          : {
              lat: eqs[eqsIndex!][selectedIndex!].lat,
              lng: eqs[eqsIndex!][selectedIndex!].lng,
            }
      }
      zoom={3}
      options={{
        styles: customStyle,
        mapTypeControl: false,
        streetViewControl: false,
      }}
    >
      {eqs.length > 0 &&
        eqs[eqsIndex!].map(({ id, lat, lng }: EqObject, index: number) => (
          <Marker
            key={id}
            position={{
              lat,
              lng,
            }}
            icon={id === selectedId ? pinned : pin}
            onClick={() =>
              dispatch({
                type: UPDATE_TABLE_MAP,
                payload: {
                  selectedId: id,
                  selectedIndex: index,
                },
              })
            }
          />
        ))}
    </GoogleMap>
  </LoadScript>
);

export default Map;
