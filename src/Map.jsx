import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

export default ({ latitude, longitude, zoom = 13 }) => {
  const position = [latitude, longitude];
  return (
    <LeafletMap center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafletMap>
  );
};
