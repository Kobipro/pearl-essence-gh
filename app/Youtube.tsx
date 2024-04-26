"use client";

import React, { useRef, useEffect, useState } from 'react';

const YoutubeEmbed = ({ embedId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this value based on when you want the video to start playing
      }
    );

    observer.observe(videoRef.current);

    // Clean up observer
    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div ref={videoRef} className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
      {isVisible && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
    </div>
  );
};

const Youtube = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <YoutubeEmbed embedId="ydf_QtwV018" />
      <p className="text-2xl font-bold">Check out our YouTube channel!</p>
    </div>
  );
};

export default Youtube;
