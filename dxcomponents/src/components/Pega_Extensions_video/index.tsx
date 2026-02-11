import { useState, useEffect, useCallback } from 'react';
import {
  withConfiguration
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

import StyledPegaExtensionsVideoWrapper from './styles';

// interface for props
interface PegaExtensionsVideoProps extends Partial<PConnFieldProps> {
  getPConnect?: () => any; // Make getPConnect optional for Storybook compatibility
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  datapage?: string;
  datapageparams?: string;
  testId?: string;
}

// Interface for data page response (extends props with videoSource from data page)
interface DataPageVideoData extends Partial<PegaExtensionsVideoProps> {
  videoSource: string;
}

// Default fallback video data for Storybook
const DEFAULT_FALLBACK_VIDEOS = {
  default: 'https://www.w3schools.com/html/mov_bbb.mp4',
  autoplay: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  responsive: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
};

// props passed in combination of props from property panel (config.json) and run time props from Constellation
function PegaExtensionsVideo(props: PegaExtensionsVideoProps) {
  const { 
    getPConnect,
    width = '100%',
    height = 'auto',
    autoplay = false,
    muted = false,
    loop = false,
    testId,
    datapage,
    datapageparams
  } = props;

  const [videoData, setVideoData] = useState<DataPageVideoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Safely get PConnect - it might not exist in Storybook
  let pConn = null;
  try {
    pConn = getPConnect && typeof getPConnect === 'function' ? getPConnect() : null;
  } catch (err) {
    // getPConnect might throw in Storybook environment
    console.warn('getPConnect not available, using Storybook fallback mode');
    pConn = null;
  }

  // Check if we're in Storybook environment (no PCore available or getPConnect is not a function)
  const isStorybookEnvironment = !pConn || !getPConnect || typeof getPConnect !== 'function' || !(window as any).PCore;

  // Storybook fallback data based on datapage and params for variety in stories
  const getStorybookFallbackData = useCallback((dp: string, params: string | undefined): DataPageVideoData => {
    const parsedParams = parseDataPageParams(params);
    
    // Select video source based on data page or parameters
    let videoSource = DEFAULT_FALLBACK_VIDEOS.default;
    if (parsedParams.videoId === 'autoplay-video') {
      videoSource = DEFAULT_FALLBACK_VIDEOS.autoplay;
    } else if (parsedParams.videoId === 'responsive-video') {
      videoSource = DEFAULT_FALLBACK_VIDEOS.responsive;
    }
    
    return {
      videoSource,
      width: parsedParams.width ?? width,
      height: parsedParams.height ?? height,
      autoplay: parsedParams.autoplay ?? autoplay,
      muted: parsedParams.muted ?? muted,
      loop: parsedParams.loop ?? loop
    };
  }, [width, height, autoplay, muted, loop]);

  // Function to parse data page parameters
  const parseDataPageParams = (params: string | undefined): Record<string, any> => {
    if (!params) return {};
    
    try {
      // Handle JSON format
      // if (params.startsWith('{')) {
      //  return JSON.parse(params);
      // }
      
      const getParamValue = (e: any) => {
        if (e === null || e === "") {
          return e;
        }
        const eachVal = e.split(':');

        if (eachVal[1].trim().startsWith(".")) {
          let propVal = eachVal[1].trim();
          const lastIndex = propVal.lastIndexOf('.');
          console.log(propVal);
          // if property is embed page reference
          if (lastIndex === 0) {
            propVal = pConn.getValue(propVal);
          } else {
            const searchProp = propVal.substring(lastIndex);
            propVal = pConn.getValue(searchProp, `caseInfo.content${propVal.substring(0, lastIndex)}`);
          }
          return JSON.stringify(eachVal[0].trim()) + ":" + JSON.stringify(propVal);
        }
        else {
          return JSON.stringify(eachVal[0].trim()) + ":" + JSON.stringify(eachVal[1].trim());
        }
      };

      // params -> a:1, b:2, c:3 => [a:1, b:2, c:3] => a:1 => [client, .Case.ClientID] => [client, Citi] => client: "Citi"
      const dPageParams = "{" + params.split(',').map(getParamValue).join(",") + "}";
      console.log(dPageParams);
      return JSON.parse(dPageParams);
    } catch (err) {
      console.error('Error parsing data page parameters:', err);
      return {};
    }
  };

  // Function to fetch data from data page using PCore APIs
  const fetchVideoData = useCallback(async () => {
    if (!datapage) return;

    // Use fallback data in Storybook environment
    if (isStorybookEnvironment) {
      const fallbackData = getStorybookFallbackData(datapage, datapageparams);
      setVideoData(fallbackData);
      return;
    }

    if (!pConn) return;

    setLoading(true);
    setError(null);

    try {
      // Get PCore - it's available globally
      const PCore = (window as any).PCore;
      
      if (!PCore) {
        throw new Error('PCore not available');
      }

      const params = parseDataPageParams(datapageparams);
      
      // Use PCore's data page API to fetch data
      const dataPageResponse = await PCore.getDataPageUtils().getPageDataAsync(
        datapage,
        pConn.getContextName && pConn.getContextName(),
        params
      );
      
      if (dataPageResponse && (dataPageResponse.data || dataPageResponse)) {
        // Handle different response formats
        const responseData = dataPageResponse.data || dataPageResponse;
        setVideoData(responseData);
      } else {
        throw new Error('No data returned from data page');
      }
    } catch (err) {
      console.error('Error fetching video data from data page:', err);
      setError(`Failed to load video data: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }, [datapage, datapageparams, pConn, isStorybookEnvironment, getStorybookFallbackData]);

  // Effect to fetch data when component mounts or dependencies change
  useEffect(() => {
    if (datapage) {
      fetchVideoData();
    } else if (isStorybookEnvironment) {
      // Provide fallback data for Storybook when no datapage is configured
      const fallbackData = getStorybookFallbackData('D_VideoData', undefined);
      setVideoData(fallbackData);
    }
  }, [datapage, fetchVideoData, isStorybookEnvironment, getStorybookFallbackData]);

  // If no data page is configured and not in Storybook, show a message
  if (!datapage && !isStorybookEnvironment) {
    return (
      <StyledPegaExtensionsVideoWrapper data-testid={testId}>
        <div className="no-video-message">
          No data page configured
        </div>
      </StyledPegaExtensionsVideoWrapper>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <StyledPegaExtensionsVideoWrapper data-testid={testId}>
        <div className="loading-message">
          Loading video...
        </div>
      </StyledPegaExtensionsVideoWrapper>
    );
  }

  // Show error state
  if (error) {
    return (
      <StyledPegaExtensionsVideoWrapper data-testid={testId}>
        <div className="error-message">
          {error}
        </div>
      </StyledPegaExtensionsVideoWrapper>
    );
  }

  // Determine video properties - use data page data with fallbacks
  const {
    videoSource = '',
    width: dataWidth = width,
    height: dataHeight = height,
    autoplay: dataAutoplay = autoplay,
    muted: dataMuted = muted,
    loop: dataLoop = loop
  } = videoData || {};

  // If no video source is available after data loading, show a message
  if (!videoSource) {
    return (
      <StyledPegaExtensionsVideoWrapper data-testid={testId}>
        <div className="no-video-message">
          No video source provided from data page
        </div>
      </StyledPegaExtensionsVideoWrapper>
    );
  }

  return (
    <StyledPegaExtensionsVideoWrapper data-testid={testId}>
      <video
        controls
        width={dataWidth}
        height={dataHeight}
        autoPlay={dataAutoplay}
        muted={dataMuted}
        loop={dataLoop}
        className="video-player"
      >
        <source src={videoSource} type="video/mp4" />
        <source src={videoSource} type="video/webm" />
        <source src={videoSource} type="video/ogg" />
        <track
          kind="captions"
          src=""
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </StyledPegaExtensionsVideoWrapper>
  );
}

export default withConfiguration(PegaExtensionsVideo);
