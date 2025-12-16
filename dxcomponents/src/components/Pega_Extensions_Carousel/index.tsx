import { useState, useEffect, useRef } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

import StyledPegaExtensionsCarouselWrapper from './styles';

// interface for props
interface PegaExtensionsCarouselProps extends PConnFieldProps {
  images: string;
  autoPlay?: boolean;
  interval?: number;
}

// Default images for demonstration
const defaultImages = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4",
  "https://picsum.photos/800/400?random=5"
];

// Main carousel component function
function PegaExtensionsCarousel(props: PegaExtensionsCarouselProps) {
  const { images, testId, autoPlay = true, interval = 5000 } = props;
  
  // Parse images from value prop (comma-separated string), otherwise use default images
  let carouselImages = defaultImages; // Always start with default images
  let isUsingDefaultImages = true; // Track if we're using default images
  
  // Check if value prop is provided (from App Studio configuration)
  if (images && typeof images === 'string' && images.trim() !== '') {
    // Split the comma-separated string into an array of URLs
    const urlsFromValue = images
      .split(',')
      .map(url => url.trim())
      .filter(url => url.length > 0);
    
    if (urlsFromValue.length > 0) {
      carouselImages = urlsFromValue;
      isUsingDefaultImages = false; // We have custom images
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && carouselImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % carouselImages.length);
      }, interval);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isHovered, carouselImages.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleCarouselKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'Home':
        event.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        goToSlide(carouselImages.length - 1);
        break;
      default:
        break;
    }
  };

  // Ensure we always have images to display (fallback to default images)
  if (!carouselImages || carouselImages.length === 0) {
    carouselImages = defaultImages;
  }

  return (
    <StyledPegaExtensionsCarouselWrapper
      data-testid={testId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleCarouselKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      {/* Default images indicator */}
      {isUsingDefaultImages && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'rgba(33, 150, 243, 0.9)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          zIndex: 10,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          Loading default images
        </div>
      )}
      
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {carouselImages.map((image, index) => (
              <div key={`slide-${image.replace(/[^a-zA-Z0-9]/g, '')}`} className="carousel-slide">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x400/CCCCCC/666666?text=Image+${index + 1}+Not+Found`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        {carouselImages.length > 1 && (
          <>
            <button 
              type="button"
              className="carousel-control prev"
              onClick={goToPrevious}
              onKeyDown={(e) => handleKeyDown(e, goToPrevious)}
              aria-label="Previous image"
              tabIndex={0}
            >
              &#8249;
            </button>
            <button 
              type="button"
              className="carousel-control next"
              onClick={goToNext}
              onKeyDown={(e) => handleKeyDown(e, goToNext)}
              aria-label="Next image"
              tabIndex={0}
            >
              &#8250;
            </button>
          </>
        )}

        {/* Indicators */}
        {carouselImages.length > 1 && (
          <div className="carousel-indicators">
            {carouselImages.map((image, index) => (
              <button
                key={`indicator-${image.replace(/[^a-zA-Z0-9]/g, '')}`}
                type="button"
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                onKeyDown={(e) => handleKeyDown(e, () => goToSlide(index))}
                aria-label={`Go to image ${index + 1}`}
                aria-pressed={index === currentIndex}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </div>
    </StyledPegaExtensionsCarouselWrapper>
  );
};


export default withConfiguration(PegaExtensionsCarousel);
