/* eslint-disable react/j    images: {
      control: 'text',
      description: 'Comma-separated string of image URLs tSlowAutoPlayClone.args = {
  images: sampleCloneImagesString,
  autoPlay: true,
  interval: 8000,
  testId: 'carousel-clone-slow'
};lay in the carousel',
    },o-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps } from './mock';

import PegaExtensionsCarouselWithData from './index';

const meta: Meta<typeof PegaExtensionsCarouselWithData> = {
  title: 'Extensions/Image Carousel Clone',
  component: PegaExtensionsCarouselWithData,
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
    images: {
      control: 'object',
      description: 'Array of image URLs to display in the carousel clone',
    },
    dataPage: {
      control: 'text',
      description: 'Name of the data page to load images from',
    },
    imageUrlProperty: {
      control: 'text',
      description: 'Property name for image URLs in data page records',
    },

  },
};

export default meta;
type Story = StoryObj<typeof PegaExtensionsCarouselWithData>;

const sampleCloneImagesString = 'https://picsum.photos/800/400?random=10,https://picsum.photos/800/400?random=11,https://picsum.photos/800/400?random=12,https://picsum.photos/800/400?random=13,https://picsum.photos/800/400?random=14';

export const DefaultCarouselClone: Story = (args: any) => {
  const [value, setValue] = useState('');

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
        <strong>Images:</strong> {args.images || 'Default images'}
      </div>
      <PegaExtensionsCarouselWithData {...props} {...args} />
    </div>
  );
};

DefaultCarouselClone.args = {
  images: sampleCloneImagesString,
  autoPlay: true,
  interval: 4000,
  testId: 'carousel-clone-demo'
};

export const SlowAutoPlayClone: Story = (args: any) => {
  const [value, setValue] = useState('');

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
      <PegaExtensionsCarouselWithData {...props} {...args} />
    </div>
  );
};

SlowAutoPlayClone.args = {
  images: sampleCloneImagesString,
  autoPlay: true,
  interval: 7000,
  testId: 'carousel-clone-slow'
};

export const ManualClone: Story = (args: any) => {
  const [value, setValue] = useState('');

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
      <PegaExtensionsCarouselWithData {...props} {...args} />
    </div>
  );
};

ManualClone.args = {
  images: sampleCloneImagesString,
  autoPlay: false,
  interval: 5000,
  testId: 'carousel-clone-manual'
};

export const DataPageConfiguration: Story = (args: any) => {
  const [value, setValue] = useState('');

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
      <div style={{ marginBottom: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Data Page Configuration Example</h4>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          This story demonstrates how to configure the carousel to load images from a Pega data page.
          The component uses PCore API (modern) with PegaRULES fallback for data page access.
        </p>
        <ul style={{ margin: '10px 0 0 20px', fontSize: '12px', color: '#666' }}>
          <li><strong>Data Page:</strong> D_ImageCarouselData</li>
          <li><strong>Image URL Property:</strong> imageUrl</li>
          <li><strong>API Priority:</strong> PCore.getDataPageUtils() → PegaRULES.getDataPage()</li>
        </ul>
      </div>
      <PegaExtensionsCarouselWithData {...props} {...args} />
    </div>
  );
};

DataPageConfiguration.args = {
  dataPage: 'D_ImageCarouselData',
  imageUrlProperty: 'imageUrl',
  autoPlay: true,
  interval: 6000,
  testId: 'carousel-clone-datapage'
};

export const DefaultImagesWhenEmpty: Story = (args: any) => {
  const [value, setValue] = useState('');

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
        <strong>Note:</strong> This carousel clone demonstrates the default images behavior when no data source is available.
        The component will automatically show default placeholder images from Picsum instead of an empty state, and displays a 
        "Loading default images" indicator in the top-left corner.
      </div>
      <PegaExtensionsCarouselWithData {...props} {...args} />
    </div>
  );
};

DefaultImagesWhenEmpty.args = {
  images: '', // Empty string to trigger default images
  dataPage: '', // No data page
  autoPlay: true,
  interval: 4000,
  testId: 'carousel-clone-default-images'
};

export const CommaSeparatedUrlsClone: Story = (args: any) => {
  const [images, setImages] = useState(args.images || 'https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=21, https://picsum.photos/800/400?random=22');

  const props = {
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
      };
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Demo:</strong> This shows how comma-separated URLs work with data page support. Try editing the images below:
        <br />
        <input 
          type="text" 
          value={images} 
          onChange={(e) => setImages(e.target.value)}
          style={{ width: '100%', marginTop: '5px', padding: '4px', border: '1px solid #ccc', borderRadius: '2px' }}
          placeholder="Enter comma-separated image URLs"
        />
      </div>
      <PegaExtensionsCarouselWithData {...props} {...args} images={images} />
    </div>
  );
};

CommaSeparatedUrlsClone.args = {
  images: 'https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=21, https://picsum.photos/800/400?random=22',
  autoPlay: true,
  interval: 4000,
  testId: 'carousel-clone-comma-urls'
};
