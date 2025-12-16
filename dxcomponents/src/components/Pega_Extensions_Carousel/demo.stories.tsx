
/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps } from './mock';

import PegaExtensionsCarousel from './index';

const meta: Meta<typeof PegaExtensionsCarousel> = {
  title: 'Extensions/Image Carousel',
  component: PegaExtensionsCarousel,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'Whether the carousel should auto-advance slides',
    },
    interval: {
      control: 'number',
      description: 'Time in milliseconds between auto-advancing slides',
    },
    value: {
      control: 'text',
      description: 'Comma-separated string of image URLs to display in the carousel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaExtensionsCarousel>;

const sampleImagesString = 'https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3,https://picsum.photos/800/400?random=4,https://picsum.photos/800/400?random=5';

export const DefaultCarousel: Story = (args: any) => {
  const [value, setValue] = useState(args.value || sampleImagesString);

  const props = {
    value,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName: string, theValue: any) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
      };
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Value:</strong> {value}
      </div>
      <PegaExtensionsCarousel {...props} {...args} />
    </div>
  );
};

DefaultCarousel.args = {
  value: sampleImagesString,
  autoPlay: true,
  interval: 5000,
  testId: 'carousel-demo'
};

export const AutoPlayDisabled: Story = (args: any) => {
  const [value, setValue] = useState(args.value || sampleImagesString);

  const props = {
    value,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName: string, theValue: any) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
      };
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Auto-play:</strong> Disabled | <strong>Value:</strong> {value}
      </div>
      <PegaExtensionsCarousel {...props} {...args} />
    </div>
  );
};

AutoPlayDisabled.args = {
  value: sampleImagesString,
  autoPlay: false,
  interval: 5000,
  testId: 'carousel-manual'
};

export const FastAutoPlay: Story = (args: any) => {
  const [value, setValue] = useState(args.value || sampleImagesString);

  const props = {
    value,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName: string, theValue: any) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
      };
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Auto-play:</strong> Fast (2s) | <strong>Value:</strong> {value}
      </div>
      <PegaExtensionsCarousel {...props} {...args} />
    </div>
  );
};

FastAutoPlay.args = {
  value: sampleImagesString,
  autoPlay: true,
  interval: 2000,
  testId: 'carousel-fast'
};

export const DefaultImagesWhenEmpty: Story = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  const props = {
    value,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName: string, theValue: any) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
      };
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Note:</strong> This carousel demonstrates the default images behavior when no value is provided.
        The component will automatically show placeholder images instead of an empty state, and displays a 
        "Loading default images" indicator in the top-left corner.
      </div>
      <PegaExtensionsCarousel {...props} {...args} />
    </div>
  );
};

DefaultImagesWhenEmpty.args = {
  value: '', // Empty string to trigger default images
  autoPlay: true,
  interval: 3000,
  testId: 'carousel-default-images'
};

export const CommaSeparatedUrls: Story = (args: any) => {
  const [value, setValue] = useState(args.value || 'https://picsum.photos/800/400?random=10, https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=30');

  const props = {
    value,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName: string, theValue: any) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
      };
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Demo:</strong> This shows how comma-separated URLs work. Try editing the value below:
        <br />
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          style={{ width: '100%', marginTop: '5px', padding: '4px', border: '1px solid #ccc', borderRadius: '2px' }}
          placeholder="Enter comma-separated image URLs"
        />
      </div>
      <PegaExtensionsCarousel {...props} {...args} />
    </div>
  );
};

CommaSeparatedUrls.args = {
  value: 'https://picsum.photos/800/400?random=10, https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=30',
  autoPlay: true,
  interval: 4000,
  testId: 'carousel-comma-urls'
};
