import { useState, useEffect, useRef } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

import StyledPegaExtensionsCarouselWithDataWrapper from './styles';

// interface for props
interface PegaExtensionsCarouselWithDataProps extends PConnFieldProps {
  images?: string;
  autoPlay?: boolean;
  interval?: number;
  dataPage?: string;
  imageUrlProperty?: string;
}

// Default images for demonstration
const defaultImages = [
  'https://picsum.photos/800/400?random=12',
  'https://picsum.photos/800/400?random=15',
  'https://picsum.photos/800/400?random=16',
  'https://picsum.photos/800/400?random=17',
  'https://picsum.photos/800/400?random=18'
];

// Main carousel clone component function
function PegaExtensionsCarouselWithData(props: PegaExtensionsCarouselWithDataProps) {
  const { 
    getPConnect, 
    value, 
    testId, 
    images, 
    autoPlay = true, 
    interval = 5000,
    dataPage,
    imageUrlProperty = 'imageUrl'
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dataPageImages, setDataPageImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to fetch data from PCore API
  const fetchDataPageWithPCore = async (dataPageName: string, pConn: any) => {
    const dataPageUtils = (window as any).PCore.getDataPageUtils();
    const contextName = pConn && pConn.getContextName ? pConn.getContextName() : '';
    
    try {
      const results = await dataPageUtils.getDataAsync(dataPageName, contextName);
      if (results && Array.isArray(results)) {
        return results;
      } else if (results && results.pxResults && Array.isArray(results.pxResults)) {
        return results.pxResults;
      } else if (results && results.data && Array.isArray(results.data)) {
        return results.data;
      } else {
        throw new Error('Data page returned invalid format');
      }
    } catch (err: any) {
      throw new Error(`Failed to load data page via PCore: ${err.message || 'Unknown error'}`);
    }
  };

  // Helper function to fetch data from PegaRULES API
  const fetchDataPageWithPegaRULES = async (dataPageName: string) => {
    const pegaDataPage = (window as any).PegaRULES.getDataPage(dataPageName);
    
    if (pegaDataPage && pegaDataPage.then) {
      const results = await pegaDataPage;
      if (results && Array.isArray(results)) {
        return results;
      } else if (results && results.pxResults && Array.isArray(results.pxResults)) {
        return results.pxResults;
      } else {
        throw new Error('Data page returned invalid format');
      }
    } else {
      return pegaDataPage || [];
    }
  };

  // Fetch data from data page using PCore API
  useEffect(() => {
    const loadDataPage = async () => {
      if (!dataPage || !getPConnect || typeof getPConnect !== 'function') {
        if (dataPage && !getPConnect) {
          setError('Data page specified but no Pega connection available');
        }
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        const pConn = getPConnect();
        let results: any[] = [];

        // Try PCore API first (modern approach)
        if ((window as any).PCore && (window as any).PCore.getDataPageUtils) {
          const dataPageUtils = (window as any).PCore.getDataPageUtils();
          if (dataPageUtils && dataPageUtils.getDataAsync) {
            results = await fetchDataPageWithPCore(dataPage, pConn);
          } else {
            throw new Error('PCore data page utilities not available');
          }
        } 
        // Fallback to PegaRULES
        else if ((window as any).PegaRULES && (window as any).PegaRULES.getDataPage) {
          results = await fetchDataPageWithPegaRULES(dataPage);
        } else {
          throw new Error('Data page integration requires Pega runtime environment (PCore or PegaRULES)');
        }

        setDataPageImages(results);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || 'Unknown error accessing data page');
        setDataPageImages([]);
        setIsLoading(false);
      }
    };

    loadDataPage();
  }, [dataPage, getPConnect]);
  
  // Determine which images to use based on data source priority
  let carouselImages = defaultImages; // Always start with default images
  let isUsingDefaultImages = true; // Track if we're using default images
  
  // Priority 1: Data page results
  if (dataPageImages && dataPageImages.length > 0) {
    carouselImages = dataPageImages.map((item: any) => {
      if (typeof item === 'string') {
        return item;
      } else if (item && typeof item === 'object') {
        // Extract image URL from data page record
        return item[imageUrlProperty] || item.imageUrl || item.url || item.src || Object.values(item)[0];
      }
      return item;
    }).filter(Boolean);
    isUsingDefaultImages = false; // We have data page results
  } 
  // Priority 2: Comma-separated string from images prop
  else if (images && typeof images === 'string' && images.trim() !== '') {
    // Split the comma-separated string into an array of URLs
    const urlsFromImages = images
      .split(',')
      .map(url => url.trim())
      .filter(url => url.length > 0);
    
    if (urlsFromImages.length > 0) {
      carouselImages = urlsFromImages;
      isUsingDefaultImages = false; // We have custom images
    }
  }
  // Priority 3: JSON value from property (legacy support)
  else if (value && typeof value === 'string' && value.trim() !== '') {
    try {
      const parsedImages = JSON.parse(value);
      if (Array.isArray(parsedImages) && parsedImages.length > 0) {
        carouselImages = parsedImages;
        isUsingDefaultImages = false; // We have custom images
      }
    } catch (e) {
      // If parsing fails, try comma-separated format
      const urlsFromValue = value
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0);
      
      if (urlsFromValue.length > 0) {
        carouselImages = urlsFromValue;
        isUsingDefaultImages = false; // We have custom images
      }
    }
  }
  // Priority 4: Default images (already set above)

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

  // Show loading state
  if (isLoading) {
    return (
      <StyledPegaExtensionsCarouselWithDataWrapper>
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          Loading images from data page...
        </div>
      </StyledPegaExtensionsCarouselWithDataWrapper>
    );
  }

  // Ensure we always have images to display (fallback to default images)
  if (!carouselImages || carouselImages.length === 0) {
    carouselImages = defaultImages;
  }

  // Show error message but still display carousel with default images
  const showErrorMessage = error && !isLoading;

  return (
    <StyledPegaExtensionsCarouselWithDataWrapper
      data-testid={testId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleCarouselKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel clone"
    >
      {/* Error message overlay */}
      {showErrorMessage && (
        <div style={{ 
          position: 'absolute', 
          top: '10px', 
          left: '10px', 
          right: '10px', 
          background: 'rgba(211, 47, 47, 0.9)', 
          color: 'white', 
          padding: '8px 12px', 
          borderRadius: '4px', 
          fontSize: '12px', 
          zIndex: 10,
          textAlign: 'center'
        }}>
          {error} - Using default images
        </div>
      )}
      
      {/* Default images indicator */}
      {isUsingDefaultImages && !showErrorMessage && (
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
                    target.src = `https://via.placeholder.com/800x400/CCCCCC/666666?text=Clone+Image+${index + 1}+Not+Found`;
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
    </StyledPegaExtensionsCarouselWithDataWrapper>
  );
};


export default withConfiguration(PegaExtensionsCarouselWithData);
