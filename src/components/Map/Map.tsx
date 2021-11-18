import React from "react";
import "./map.scss";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "./LocationIcon/LocationIcon";

const position: LatLngExpression = [51.505, -0.09];

const Map: React.FC = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={LocationIcon}>
        <Popup>
          You are here now!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
