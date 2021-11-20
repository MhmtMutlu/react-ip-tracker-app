import React, { useContext, useEffect, useState } from "react";
import "./map.scss";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LocationIcon } from "./LocationIcon/LocationIcon";
import { IPContext } from "../../contexts/IPContext";

const Map: React.FC = () => {
  const { data } = useContext(IPContext);
  const [position, setPosition] = useState<LatLngExpression>([data.location.lat, data.location.lng])

  useEffect(() => {
    setPosition([data.location.lat, data.location.lng]);
  }, [data]);

  function CenterMap({ coords }: any) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }

  return (
    <MapContainer center={position} zoom={12} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={LocationIcon}>
        <Popup>You are here now!</Popup>
      </Marker>
      <CenterMap coords={position}/>
    </MapContainer>
  );
};

export default Map;
