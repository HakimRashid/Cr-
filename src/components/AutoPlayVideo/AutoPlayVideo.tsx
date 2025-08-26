import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

// Define the shape of the component's props
interface AutoplayVideoProps {
  url: string;
}

const AutoplayVideo: React.FC<AutoplayVideoProps> = ({ url }) => {
  // `playerRef` is a reference to the ReactPlayer component
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // `useState` is typed as a boolean
  const [shouldPlay, setShouldPlay] = useState<boolean>(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported.');
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setShouldPlay(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.8,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
        <ReactPlayer src={url} playing={shouldPlay} loop={true}
        muted={true} // Autoplay policy requires video to be muted initially
        width="100%" height="100%"
        // `wrapper` prop ensures the ref points to the correct DOM element
        wrapper={React.Fragment} />
    </div>
  );
};

export default AutoplayVideo;