"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";

type MapEmbedProps = {
  directionsUrl: string;
  mapUrl: string;
};

function MapPreview({ onActivate }: { onActivate: () => void }) {
  return (
    <button className="map-preview-button" type="button" onClick={onActivate} aria-label="Load interactive Google Map">
      <span className="map-preview" aria-hidden="true">
        <span className="map-water" />
        <span className="map-road map-road-coastal" />
        <span className="map-road map-road-main" />
        <span className="map-road map-road-local" />
        <span className="map-place map-place-green-head">Green Head</span>
        <span className="map-place map-place-bay">Dynamite Bay</span>
        <span className="map-marker"><Icon name="pin" size={32} /></span>
      </span>
      <span className="map-preview-link">Load interactive map <Icon name="arrow" size={16} /></span>
    </button>
  );
}

export function MapEmbed({ directionsUrl, mapUrl }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded || !mapCardRef.current || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    observer.observe(mapCardRef.current);
    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div ref={mapCardRef} className={`map-card${isLoaded ? " map-card-loaded" : ""}`}>
      {isLoaded ? (
        <>
          <iframe
            title="Map showing Centre Break Beach Stay in Green Head"
            src={mapUrl}
            loading="lazy"
          />
          <a className="map-preview-link" href={directionsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <Icon name="arrow" size={16} />
          </a>
        </>
      ) : (
        <MapPreview onActivate={() => setIsLoaded(true)} />
      )}
      <div className="map-badge"><Icon name="pin" size={16} /><span>50 metres<br /><small>from Dynamite Bay</small></span></div>
    </div>
  );
}
