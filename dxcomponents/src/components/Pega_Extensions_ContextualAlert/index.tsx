import React from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
import StyledPegaExtensionsContextualAlertWrapper from './styles';

// Import SVG icons as URLs
import AttentionIconUrl from './Attention_Icon.svg';
import InfoIconUrl from './Info_Icon.svg';
import ReminderIconUrl from './Reminder_Icon.svg';
import SpeakIconUrl from './Speak_Icon.svg';

// Alert type definitions
type AlertType = 'urgent' | 'info' | 'warning' | 'success';

// interface for props
interface PegaExtensionsContextualAlertProps extends PConnFieldProps {
  type: AlertType;
  title: string;
  message: string;
}

// Alert configuration mapping
const alertConfig = {
  urgent: {
    iconUrl: AttentionIconUrl,
    className: 'alert-urgent',
    textColor: '#dc2626',
    iconColor: '#dc2626'
  },
  info: {
    iconUrl: InfoIconUrl,
    className: 'alert-info',
    textColor: '#3b82f6',
    iconColor: '#3b82f6'
  },
  warning: {
    iconUrl: ReminderIconUrl,
    className: 'alert-warning',
    textColor: '#f59e0b',
    iconColor: '#f59e0b'
  },
  success: {
    iconUrl: SpeakIconUrl,
    className: 'alert-success',
    textColor: '#10b981',
    iconColor: '#10b981'
  }
};

// Helper function to detect if content is HTML
const isHtmlContent = (content: string): boolean => {
  // Check for HTML tags
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  return htmlRegex.test(content);
};

// Helper function to sanitize HTML (basic sanitization)
const sanitizeHtml = (html: string): string => {
  // Remove script tags and on* attributes for basic security
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(/\son\w+="[^"]*"/gi, ''); // Remove onclick, onload, etc.
  
  return sanitized;
};

// Helper function to create icon component with proper coloring
const createIconComponent = (iconUrl: string, color: string, altText: string) => (
  <div 
    style={{
      width: '20px',
      height: '20px',
      backgroundColor: color,
      WebkitMask: `url(${iconUrl}) no-repeat center`,
      mask: `url(${iconUrl}) no-repeat center`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain'
    }}
    role="img"
    aria-label={altText}
  />
);

// Main Contextual Alert component
function PegaExtensionsContextualAlert(props: PegaExtensionsContextualAlertProps) {
  const { 
    type = 'info', 
    title = 'Alert', 
    message = '', 
    testId 
  } = props;

  // Get alert configuration based on type
  const config = alertConfig[type] || alertConfig.info;

  // Determine how to render the message
  const renderMessage = () => {
    if (!message) {
      return null;
    }

    if (isHtmlContent(message)) {
      // Render as HTML with sanitization
      const sanitizedHtml = sanitizeHtml(message);
      return (
        <div 
          className="alert-message html-content"
          style={{ color: config.textColor }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      );
    } else {
      // Render as plain text
      return <div className="alert-message text-content" style={{ color: config.textColor }}>{message}</div>;
    }
  };

  return (
    <StyledPegaExtensionsContextualAlertWrapper data-testid={testId}>
      <div className={`contextual-alert ${config.className}`} role="alert" aria-live="polite">
        <div className="alert-header">
          <div className="alert-icon">
            {createIconComponent(config.iconUrl, config.iconColor, type)}
          </div>
          <div className="alert-title">
            <strong style={{ color: config.textColor }}>{title}</strong>
          </div>
        </div>
        {message && (
          <div className="alert-body">
            {renderMessage()}
          </div>
        )}
      </div>
    </StyledPegaExtensionsContextualAlertWrapper>
  );
};


export default withConfiguration(PegaExtensionsContextualAlert);
