"use client"
import { useEffect } from 'react';
import { AttributionControl, MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

/* Leaflet measures its container once at init and never re-tiles when that box
   changes, so a responsive container leaves the map rendered at its old size --
   blank space where tiles should be after crossing the md breakpoint. Watch the
   container and tell Leaflet to re-measure. The rAF coalesces bursts of resize
   callbacks and keeps invalidateSize out of the observer's own layout pass. */
function InvalidateOnResize() {
  const map = useMap();

  useEffect(() => {
    let frame = 0;

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => map.invalidateSize());
    });

    observer.observe(map.getContainer());

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [map]);

  return null;
}

export default function Map() {
  // On mobile the map spans the full width, so leaving pan/zoom enabled lets it
  // swallow vertical swipes and trap page scroll. It is decorative here -- it
  // just shows the region -- so interaction is dropped on coarse pointers.
  // Safe to read at render time: this component is loaded with ssr: false.
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  return (
    <MapContainer
      center={[33.87908988696695, -117.5759266366733]}
      zoom={10}
      zoomControl={false}
      scrollWheelZoom={!isTouch}
      dragging={!isTouch}
      touchZoom={!isTouch}
      doubleClickZoom={!isTouch}
      attributionControl={false}
      className="h-full w-full rounded-xl z-0"
    >
      <InvalidateOnResize />
      <AttributionControl prefix={false} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
    </MapContainer>
  );
}
