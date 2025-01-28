import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export function Map() {
  const mapRef = useRef<mapboxgl.Map | undefined>();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoibmluamF3aWxsNTQzIiwiYSI6ImNsZDRidWdrNjBvbDczcW9jajU5c3UxdXAifQ._jM-ztlL3-V9_0WjlFB01A";
    // Todo : hide token in env
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [1.433333, 43.6],
      zoom: 10.12,
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="h-full w-full rounded-lg">
      <div id="map-container" className="h-full w-full" ref={mapContainerRef} />
    </div>
  );
}
