/**
 * Credit Card Validation Component
 * 
 * A comprehensive credit card input field that provides:
 * - Real-time card type detection (Visa, Mastercard, American Express, Discover, Diners Club, JCB)
 * - Card logo display using inline SVG components
 * - Automatic number formatting with spaces (4-4-4-4 for most cards, 4-6-5 for Amex)
 * - Luhn algorithm validation for authentic card number verification
 * - Visual feedback with colored borders (green for valid, red for invalid)
 * - Responsive design for desktop and mobile
 * 
 * Configuration Options:
 * - showCardLogo: Toggle logo display (default: true)
 * - formatNumber: Toggle automatic formatting (default: true)
 * - All standard Pega field properties (label, placeholder, required, etc.)
 * 
 * Usage:
 * The component automatically detects card type as the user types and displays the
 * corresponding logo. It validates the card number using the Luhn algorithm and
 * provides visual feedback. The clean card number (digits only) is stored in the
 * Pega property while the formatted version is displayed to the user.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Input, withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
import StyledPegaExtensionsCreditCardWrapper from './styles';

// interface for props
interface PegaExtensionsCreditCardProps extends PConnFieldProps {
  showCardLogo?: boolean;
  formatNumber?: boolean;
}

// interface for StateProps object
interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

// Card type definitions
const cardTypes = [
  {
    name: 'Visa',
    pattern: /^4/,
    maxLength: 19, // 16 digits + 3 spaces
    color: '#1A1F71'
  },
  {
    name: 'Mastercard',
    pattern: /^5[1-5]|^2[2-7]/,
    maxLength: 19,
    color: '#EB001B'
  },
  {
    name: 'American Express',
    pattern: /^3[47]/,
    maxLength: 17, // 15 digits + 2 spaces
    color: '#006FCF'
  },
  {
    name: 'Discover',
    pattern: /^6(?:011|5)/,
    maxLength: 19,
    color: '#FF6000'
  },
  {
    name: 'Diners Club',
    pattern: /^3[068]/,
    maxLength: 16, // 14 digits + 2 spaces
    color: '#0079BE'
  },
  {
    name: 'JCB',
    pattern: /^35/,
    maxLength: 19,
    color: '#005BAC'
  }
];

// SVG Logo Components
const VisaLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#1A1F71"/>
    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">VISA</text>
  </svg>
);

const MastercardLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#EB001B"/>
    <circle cx="15" cy="12" r="6" fill="#FF5F00" opacity="0.8"/>
    <circle cx="25" cy="12" r="6" fill="#F79E1B" opacity="0.8"/>
  </svg>
);

const AmexLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#006FCF"/>
    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">AMEX</text>
  </svg>
);

const DiscoverLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#FF6000"/>
    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">DISCOVER</text>
  </svg>
);

const DinersLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#0079BE"/>
    <circle cx="20" cy="12" r="8" fill="transparent" stroke="white" strokeWidth="2"/>
  </svg>
);

const JCBLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#005BAC"/>
    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">JCB</text>
  </svg>
);

const DefaultCardLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="24" rx="4" fill="#E0E0E0" stroke="#CCCCCC" strokeWidth="1"/>
    <rect x="8" y="8" width="24" height="8" rx="2" fill="#F5F5F5"/>
  </svg>
);

// Main component function
function PegaExtensionsCreditCard(props: PegaExtensionsCreditCardProps) {
  const { 
    getPConnect, 
    value = '', 
    placeholder = 'Enter credit card number',
    disabled = false,
    readOnly = false,
    required = false,
    label = 'Credit Card Number',
    hideLabel = false,
    testId,
    showCardLogo = true,
    formatNumber = true
  } = props;

  const [cardNumber, setCardNumber] = useState(value);
  const [cardType, setCardType] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  // Detect card type based on number
  const detectCardType = useCallback((number: string) => {
    const cleaned = number.replace(/\D/g, '');
    
    for (const card of cardTypes) {
      if (card.pattern.test(cleaned)) {
        return card.name;
      }
    }
    return null;
  }, []);

  // Luhn algorithm for card validation
  const validateCardNumber = useCallback((number: string) => {
    const cleaned = number.replace(/\D/g, '');
    
    if (cleaned.length < 13 || cleaned.length > 19) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i -= 1) {
      let digit = parseInt(cleaned.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }, []);

  // Format card number with spaces
  const formatCardNumber = useCallback((number: string) => {
    // Remove all non-digit characters
    const cleaned = number.replace(/\D/g, '');
    
    // Apply formatting based on card type
    if (cardType === 'American Express') {
      // Format: 4-6-5 for Amex
      return cleaned.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3').substring(0, 17);
    } else {
      // Format: 4-4-4-4 for others
      return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ').substring(0, 19);
    }
  }, [cardType]);

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    
    // Remove all non-digit characters for processing
    const cleanedValue = inputValue.replace(/\D/g, '');
    
    // Detect card type
    const detectedType = detectCardType(cleanedValue);
    setCardType(detectedType);
    
    // Format the number if formatting is enabled
    const formattedValue = formatNumber ? formatCardNumber(inputValue) : cleanedValue;
    setCardNumber(formattedValue);
    
    // Validate the card number
    const valid = validateCardNumber(cleanedValue);
    setIsValid(valid);
    
    // Update the pConnect value with clean number
    if (getPConnect) {
      const pConn = getPConnect();
      const actions = pConn.getActionsApi();
      const stateProps = pConn.getStateProps() as StateProps;
      const propName: string = stateProps.value;
      actions.updateFieldValue(propName, cleanedValue);
    }
  };

  // Get card logo component
  const getCardLogo = () => {
    switch (cardType) {
      case 'Visa':
        return <VisaLogo />;
      case 'Mastercard':
        return <MastercardLogo />;
      case 'American Express':
        return <AmexLogo />;
      case 'Discover':
        return <DiscoverLogo />;
      case 'Diners Club':
        return <DinersLogo />;
      case 'JCB':
        return <JCBLogo />;
      default:
        return <DefaultCardLogo />;
    }
  };

  // Initialize value from props
  useEffect(() => {
    if (value) {
      const detectedType = detectCardType(value);
      setCardType(detectedType);
      setCardNumber(formatNumber ? formatCardNumber(value) : value);
      setIsValid(validateCardNumber(value));
    }
  }, [value, formatNumber, detectCardType, formatCardNumber, validateCardNumber]);

  return (
    <StyledPegaExtensionsCreditCardWrapper data-testid={testId}>
      <div className="credit-card-container">
        <div className="input-wrapper">
          <div className="input-field-container">
            <Input
              type="text"
              value={cardNumber}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              label={label}
              labelHidden={hideLabel}
              className={`credit-card-input ${isValid ? 'valid' : ''} ${cardNumber && !isValid ? 'invalid' : ''}`}
              maxLength={cardType === 'American Express' ? 17 : 19}
              testId={testId}
            />
            
            {showCardLogo && (
              <div className="card-logo">
                {getCardLogo()}
              </div>
            )}
          </div>
        </div>
        
        {cardType && (
          <div className="card-info">
            <span className="card-type">{cardType} detected</span>
            {isValid && <span className="validation-status valid">✓ Valid</span>}
            {cardNumber && !isValid && <span className="validation-status invalid">✗ Invalid</span>}
          </div>
        )}
      </div>
    </StyledPegaExtensionsCreditCardWrapper>
  );
};


export default withConfiguration(PegaExtensionsCreditCard);
