import React, { useContext, useEffect, useState } from "react";
import "./map.scss";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "./LocationIcon/LocationIcon";
import { IPContext } from "../../contexts/IPContext";

const Map: React.FC = () => {
  const { data } = useContext(IPContext);
  const [lat, setLat] = useState(data.location.lat);
  const [lang, setLang] = useState(data.location.lng);
  let position: LatLngExpression = [lat, lang];

  console.log("render edildi");
  useEffect(() => {
    setLat(data.location.lat);
    setLang(data.location.lng);
  }, [data]);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={LocationIcon}>
        <Popup>You are here now!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
