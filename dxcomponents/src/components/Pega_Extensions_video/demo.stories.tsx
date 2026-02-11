
import type { Meta, StoryObj } from '@storybook/react';

import PegaExtensionsVideo from './index';

// Mock getPConnect function for Storybook
const mockGetPConnect = () => null;

const meta: Meta<typeof PegaExtensionsVideo> = {
  title: 'PegaExtensionsVideo',
  component: PegaExtensionsVideo,
  excludeStories: /.*Data$/,
  args: {
    // Provide mock getPConnect for all stories
    getPConnect: mockGetPConnect
  }
};

export default meta;
type Story = StoryObj<typeof PegaExtensionsVideo>;

// Note: These stories work in Storybook using fallback data when PConnect is not available
// Different datapage and parameter combinations will show different fallback videos

export const Default: Story = {
  args: {
    datapage: 'D_VideoData',
    datapageparams: '{"videoId":"sample-video"}',
    width: '640',
    height: '360',
    autoplay: false,
    muted: false,
    loop: false,
    testId: 'video-player-default'
  }
};

export const WithQueryStringParams: Story = {
  args: {
    datapage: 'D_VideoData',
    datapageparams: 'format=mp4,resolution=1080p',
    width: '100%',
    height: 'auto',
    autoplay: false,
    muted: false,
    loop: false,
    testId: 'video-player-params'
  }
};

export const AutoplayVideo: Story = {
  args: {
    datapage: 'D_VideoData',
    datapageparams: '{"videoId":"autoplay-video"}',
    width: '640',
    height: '360',
    autoplay: true,
    muted: true, // Required for autoplay in most browsers
    loop: true,
    testId: 'video-player-autoplay'
  }
};

export const ResponsiveVideo: Story = {
  args: {
    datapage: 'D_VideoData',
    datapageparams: '{"videoId":"responsive-video"}',
    width: '100%',
    height: 'auto',
    autoplay: false,
    muted: false,
    loop: false,
    testId: 'video-player-responsive'
  }
};

export const NoDataPage: Story = {
  args: {
    datapage: '',
    testId: 'video-player-no-datapage'
  }
};
