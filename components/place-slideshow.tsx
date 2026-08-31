"use client";

import { useCallback, useEffect, useState, type FocusEvent, type KeyboardEvent } from "react";
import { assetPath, placeSlides } from "../lib/content";
import { Icon } from "./icon";

const slideDuration = 5200;

function formatSlideNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PlaceSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [manualPlayback, setManualPlayback] = useState(false);
  const activeSlide = placeSlides[activeIndex];

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + placeSlides.length) % placeSlides.length);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % placeSlides.length);
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + placeSlides.length) % placeSlides.length);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsPaused(true);
        setManualPlayback(false);
      }
    };

    handleMotionPreference();
    mediaQuery.addEventListener?.("change", handleMotionPreference);

    return () => mediaQuery.removeEventListener?.("change", handleMotionPreference);
  }, []);

  useEffect(() => {
    const motionAllowed = !prefersReducedMotion || manualPlayback;
    if (isPaused || isHovering || isFocused || !motionAllowed) {
      return;
    }

    const timer = window.setTimeout(goToNextSlide, slideDuration);
    return () => window.clearTimeout(timer);
  }, [activeIndex, goToNextSlide, isFocused, isHovering, isPaused, manualPlayback, prefersReducedMotion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPreviousSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextSlide();
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToSlide(placeSlides.length - 1);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsFocused(false);
    }
  };

  const togglePaused = () => {
    if (isPaused) {
      setManualPlayback(true);
      setIsPaused(false);
      return;
    }

    setManualPlayback(false);
    setIsPaused(true);
  };

  return (
    <div
      className="place-slideshow"
      aria-label="Centre Break Beach Stay photos"
      aria-roledescription="carousel"
      onBlur={handleBlur}
      onFocusCapture={() => setIsFocused(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="region"
      tabIndex={0}
    >
      <div className="place-slideshow-stage">
        {placeSlides.map((slide, index) => (
          <div
            className={`place-slide ${index === activeIndex ? "is-active" : ""}`}
            key={slide.src}
            aria-hidden={index !== activeIndex}
            aria-label={`${slide.label}, slide ${index + 1} of ${placeSlides.length}`}
            aria-roledescription="slide"
            role="group"
          >
            <img
              className="place-slide-image"
              src={assetPath(slide.src)}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      <div className="place-slideshow-counter" aria-live={isPaused || isFocused ? "polite" : "off"}>
        {formatSlideNumber(activeIndex)} / {formatSlideNumber(placeSlides.length - 1)}
      </div>

      <div className="place-slideshow-controls" aria-label="Photo slideshow controls">
        <button className="place-slideshow-control place-slideshow-control-prev" type="button" onClick={goToPreviousSlide} aria-label="Show previous place photo">
          <Icon name="arrow" size={18} />
        </button>
        <button className="place-slideshow-control" type="button" onClick={togglePaused} aria-label={isPaused ? "Play place photos" : "Pause place photos"}>
          <span className="place-slideshow-control-glyph" aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
        </button>
        <button className="place-slideshow-control" type="button" onClick={goToNextSlide} aria-label="Show next place photo">
          <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}
