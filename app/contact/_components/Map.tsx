"use client"
import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  return (
    <MapContainer
      center={[33.87908988696695, -117.5759266366733]}
      zoom={10}
      zoomControl={false}
      scrollWheelZoom={true}
      attributionControl={false}
      className="h-full w-full rounded-xl z-0"
    >
      <AttributionControl prefix={false} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
    </MapContainer>
  );
}
