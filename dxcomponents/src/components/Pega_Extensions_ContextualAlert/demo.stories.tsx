
/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import { configProps } from './mock';
import PegaExtensionsContextualAlert from './index';

const meta: Meta<typeof PegaExtensionsContextualAlert> = {
  title: 'PegaExtensionsContextualAlert',
  component: PegaExtensionsContextualAlert,
  excludeStories: /.*Data$/,
  argTypes: {
    type: {
      control: 'select',
      options: ['urgent', 'info', 'warning', 'success'],
      description: 'Alert type determines the style and icon'
    },
    title: {
      control: 'text',
      description: 'Alert title text'
    },
    message: {
      control: 'text',
      description: 'Alert message - supports plain text or HTML'
    }
  }
};

export default meta;
type Story = StoryObj<typeof PegaExtensionsContextualAlert>;

export const InfoAlert: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational alert with some useful information.',
    testId: configProps.testId
  }
};

export const WarningAlert: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'This is a warning alert. Please review the following information carefully.',
    testId: configProps.testId
  }
};

export const UrgentAlert: Story = {
  args: {
    type: 'urgent',
    title: 'Urgent Action Required',
    message: 'This is an urgent alert that requires immediate attention.',
    testId: configProps.testId
  }
};

export const SuccessAlert: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully! Your changes have been saved.',
    testId: configProps.testId
  }
};

export const HtmlMessage: Story = {
  args: {
    type: 'info',
    title: 'HTML Content',
    message: 'This alert supports <strong>HTML content</strong> including <em>emphasis</em> and <a href="#">links</a>.',
    testId: configProps.testId
  }
};

export const BasePegaExtensionsContextualAlert: Story = InfoAlert;
