"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";

export function CompanyVideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusCloseButton = window.requestAnimationFrame(() => closeRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, video, [href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusCloseButton);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeVideo, isOpen]);

  return (
    <section className="section video-introduction" aria-labelledby="company-video-title">
      <Container>
        <div className="video-introduction__heading">
          <p className="eyebrow">MS Partners</p>
          <h2 id="company-video-title">Company Introduction</h2>
        </div>

        <button
          ref={triggerRef}
          className="video-introduction__frame"
          type="button"
          aria-label="Play the MS Partners company introduction video"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/media/ms-partners-video-poster.jpg"
            alt=""
            fill
            sizes="(max-width: 680px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 3rem), 64rem"
          />
          <span className="video-introduction__play" aria-hidden="true">
            <span />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div
          className="video-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeVideo();
          }}
        >
          <div
            ref={dialogRef}
            className="video-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="company-video-dialog-title"
          >
            <h2 id="company-video-dialog-title" className="visually-hidden">
              MS Partners Company Introduction
            </h2>
            <button
              ref={closeRef}
              className="video-modal__close"
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
            >
              <span aria-hidden="true">×</span>
            </button>
            <video
              ref={videoRef}
              className="video-modal__video"
              src="/media/introduction.mp4"
              poster="/media/ms-partners-video-poster.jpg"
              controls
              autoPlay
              playsInline
              preload="metadata"
              tabIndex={0}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
