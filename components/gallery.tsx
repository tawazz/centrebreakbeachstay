"use client";

import { useState } from "react";
import { Icon } from "./icon";

const images = [
  { src: "/images/property-exterior.webp", alt: "Centre Break Beach Stay exterior" },
  { src: "/images/property-patio.jpg", alt: "Shaded outdoor patio with tables and chairs" },
  { src: "/images/front-desk.jpg", alt: "Centre Break Beach Stay front desk" },
  { src: "/images/welcome.webp", alt: "Welcome garden entrance" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="gallery-grid" aria-label="Centre Break Beach Stay gallery">
        {images.map((image, index) => (
          <button className={`gallery-tile gallery-tile-${index + 1}`} key={image.src} type="button" onClick={() => setSelected(index)}>
            <img src={image.src} alt={image.alt} />
            <span className="gallery-zoom" aria-hidden="true">+</span>
          </button>
        ))}
      </div>

      {selected !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" aria-label="Close image preview" onClick={() => setSelected(null)}>
            <Icon name="x" size={22} />
          </button>
          <img src={images[selected].src} alt={images[selected].alt} onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
