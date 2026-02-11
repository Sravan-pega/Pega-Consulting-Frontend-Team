
// Mock data for testing and Storybook stories
// When running in Storybook, the component automatically provides intelligent fallbacks
// based on the data page and parameter configuration

// Mock getPConnect function for testing environments
const mockGetPConnect = () => null;

export const configProps = {
  getPConnect: mockGetPConnect,
  datapage: 'D_VideoData',
  datapageparams: '{"videoId":"sample-video"}',
  width: '640',
  height: '360',
  autoplay: false,
  muted: false,
  loop: false,
  testId: 'video-player-12345678'
};

export const stateProps = {
  getPConnect: mockGetPConnect,
  datapage: 'D_VideoData',
  datapageparams: '{"videoId":"sample-video"}'
};

// Sample data page response format for reference
export const sampleDataPageResponse = {
  videoSource: 'https://example.com/video.mp4',
  width: '800',
  height: '450',
  autoplay: false,
  muted: false,
  loop: false
};
