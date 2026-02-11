/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import PegaExtensionsCreditCard from './index';

const meta: Meta<typeof PegaExtensionsCreditCard> = {
  title: 'Extensions/Credit Card Validation',
  component: PegaExtensionsCreditCard,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    showCardLogo: {
      control: 'boolean',
      description: 'Whether to show the detected card logo',
    },
    formatNumber: {
      control: 'boolean',
      description: 'Whether to format the card number with spaces',
    },
    value: {
      control: 'text',
      description: 'Initial card number value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaExtensionsCreditCard>;

// Sample card numbers for testing
const sampleCards = {
  visa: '4532015112830366',
  mastercard: '5555555555554444',
  amex: '378282246310005',
  discover: '6011111111111117',
  diners: '30569309025904',
  jcb: '3530111333300000'
};

export const Default: Story = (args: any) => {
  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    getPConnect: () => {
      return {
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (propName: string, theValue: any) => {
            setValue(theValue);
          },
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

  return <PegaExtensionsCreditCard {...props} {...args} />;
};

Default.args = {
  label: 'Credit Card Number',
  placeholder: 'Enter credit card number',
  showCardLogo: true,
  formatNumber: true,
  testId: 'credit-card-default',
};

export const WithVisaCard: Story = (args: any) => {
  const [value, setValue] = useState(sampleCards.visa);

  const props = {
    value,
    getPConnect: () => ({
      getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
      getActionsApi: () => ({
        updateFieldValue: (propName: string, theValue: any) => setValue(theValue),
        triggerFieldChange: () => {/* nothing */}
      }),
      ignoreSuggestion: () => {/* nothing */},
      acceptSuggestion: () => {/* nothing */},
      setInheritedProps: () => {/* nothing */},
      resolveConfigProps: () => {/* nothing */}
    })
  };

  return <PegaExtensionsCreditCard {...props} {...args} />;
};

WithVisaCard.args = {
  label: 'Visa Card Example',
  placeholder: 'Visa test card',
  showCardLogo: true,
  formatNumber: true,
  testId: 'visa-demo',
};

export const WithMastercard: Story = (args: any) => {
  const [value, setValue] = useState(sampleCards.mastercard);

  const props = {
    value,
    getPConnect: () => ({
      getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
      getActionsApi: () => ({
        updateFieldValue: (propName: string, theValue: any) => setValue(theValue),
        triggerFieldChange: () => {/* nothing */}
      }),
      ignoreSuggestion: () => {/* nothing */},
      acceptSuggestion: () => {/* nothing */},
      setInheritedProps: () => {/* nothing */},
      resolveConfigProps: () => {/* nothing */}
    })
  };

  return <PegaExtensionsCreditCard {...props} {...args} />;
};

WithMastercard.args = {
  label: 'Mastercard Example',
  placeholder: 'Mastercard test card',
  showCardLogo: true,
  formatNumber: true,
  testId: 'mastercard-demo',
};

export const WithAmericanExpress: Story = (args: any) => {
  const [value, setValue] = useState(sampleCards.amex);

  const props = {
    value,
    getPConnect: () => ({
      getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
      getActionsApi: () => ({
        updateFieldValue: (propName: string, theValue: any) => setValue(theValue),
        triggerFieldChange: () => {/* nothing */}
      }),
      ignoreSuggestion: () => {/* nothing */},
      acceptSuggestion: () => {/* nothing */},
      setInheritedProps: () => {/* nothing */},
      resolveConfigProps: () => {/* nothing */}
    })
  };

  return <PegaExtensionsCreditCard {...props} {...args} />;
};

WithAmericanExpress.args = {
  label: 'American Express Example',
  placeholder: 'AmEx test card',
  showCardLogo: true,
  formatNumber: true,
  testId: 'amex-demo',
};

export const LogoTest: Story = (args: any) => {
  const [value, setValue] = useState('4111111111111111'); // Immediate Visa card number

  const props = {
    value,
    getPConnect: () => ({
      getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
      getActionsApi: () => ({
        updateFieldValue: (propName: string, theValue: any) => setValue(theValue),
        triggerFieldChange: () => {/* nothing */}
      }),
      ignoreSuggestion: () => {/* nothing */},
      acceptSuggestion: () => {/* nothing */},
      setInheritedProps: () => {/* nothing */},
      resolveConfigProps: () => {/* nothing */}
    })
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Logo Test - Should show Visa logo immediately</h3>
      <PegaExtensionsCreditCard {...props} {...args} />
      <p>Card number: {value}</p>
    </div>
  );
};

LogoTest.args = {
  label: 'Logo Test',
  placeholder: 'Should show Visa logo',
  showCardLogo: true,
  formatNumber: true,
  testId: 'logo-test',
};
