"use client";

import { useCallback, useEffect, useState, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { assetPath, bookingUrl, heroSlides } from "../lib/content";
import { Icon } from "./icon";

const slideDuration = 6500;

function formatSlideNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [manualPlayback, setManualPlayback] = useState(false);
  const activeSlide = heroSlides[activeIndex];

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
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
      goToSlide(heroSlides.length - 1);
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
    <section
      className="hero hero-slideshow"
      aria-labelledby="hero-title"
      aria-label="Centre Break Beach Stay image slideshow"
      aria-roledescription="carousel"
      onBlur={handleBlur}
      onFocusCapture={() => setIsFocused(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="hero-slideshow-stage">
        {heroSlides.map((slide, index) => (
          <div
            className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}
            key={slide.src}
            aria-hidden={index !== activeIndex}
            role="group"
            aria-label={`${slide.label}, slide ${index + 1} of ${heroSlides.length}`}
            aria-roledescription="slide"
          >
            <img
              className="hero-slide-image"
              src={assetPath(slide.src)}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="shell hero-content hero-slideshow-content">
        <p className="eyebrow eyebrow-light"><Icon name="wave" size={16} /> Centre Break Beach Stay · Green Head</p>
        <h1 id="hero-title">Stay by the bay.<br /><em>Take it slower.</em></h1>
        <p className="hero-copy">Jurien Bay accommodation 15 minutes from town and 50 metres from Dynamite Bay, with comfortable rooms and an onsite restaurant.</p>
        <div className="hero-actions">
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noopener" data-booking-placement="home-hero">Check dates & rates <Icon name="arrow" size={17} /></a>
          <Link className="button button-ghost" href="/jurien-bay-accommodation/">Explore rooms</Link>
        </div>
        <p className="booking-helper">Live availability opens in our booking partner.</p>
      </div>

      <div className="hero-note" aria-label="Distance to Dynamite Bay"><span>50m</span><small>to Dynamite Bay</small></div>

      <div className="shell hero-slideshow-footer">
        <div className="hero-slide-caption" aria-live={isPaused || isFocused ? "polite" : "off"}>
          <span>{activeSlide.label}</span>
          <strong>{activeSlide.title}</strong>
        </div>

        <div className="hero-slideshow-controls" aria-label="Slideshow controls">
          <div className="hero-slide-counter" aria-label={`Slide ${activeIndex + 1} of ${heroSlides.length}`}>
            <span className="hero-slide-counter-current">{formatSlideNumber(activeIndex)}</span>
            <span className="hero-slide-counter-total">/{formatSlideNumber(heroSlides.length)}</span>
          </div>
          <div className="hero-slide-progress" aria-hidden="true">
            <span style={{ width: `${((activeIndex + 1) / heroSlides.length) * 100}%` }} />
          </div>
          <button className="hero-control" type="button" onClick={goToPreviousSlide} aria-label="Show previous slide">
            <Icon name="arrow" size={19} className="hero-arrow-icon hero-arrow-icon-prev" />
          </button>
          <button className="hero-control" type="button" onClick={togglePaused} aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}>
            <span className="hero-control-glyph" aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button className="hero-control" type="button" onClick={goToNextSlide} aria-label="Show next slide">
            <Icon name="arrow" size={19} className="hero-arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
