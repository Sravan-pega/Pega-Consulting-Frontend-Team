# Pega Extensions Contextual Alert Component

## Overview

The **Pega Extensions Contextual Alert** is a React component designed for Pega applications that provides clean, minimal alerts with custom SVG icons and color-coded messaging. This component displays important information, warnings, or notifications without background colors or borders for a streamlined user experience.

## Features

- 🎨 **Clean Design**: No backgrounds or borders for a minimal appearance
- 🔧 **Non-dismissible**: Alerts remain visible to ensure important information is seen
- 🎯 **Four Alert Types**: Support for urgent, info, warning, and success alerts
- 🖼️ **Custom SVG Icons**: Uses scalable vector icons with proper color theming
- 📝 **HTML Support**: Supports both plain text and sanitized HTML content
- ♿ **Accessible**: Includes proper ARIA attributes and roles
- 📱 **Responsive**: Adapts to different screen sizes

## Alert Types

### 1. Urgent (`urgent`)
- **Icon**: Attention_Icon.svg
- **Color**: Red (`#dc2626`)
- **Use Case**: Critical errors, immediate action required

### 2. Info (`info`)
- **Icon**: Info_Icon.svg  
- **Color**: Blue (`#3b82f6`)
- **Use Case**: General information, tips, guidance

### 3. Warning (`warning`)
- **Icon**: Reminder_Icon.svg
- **Color**: Orange (`#f59e0b`)
- **Use Case**: Important notices, potential issues

### 4. Success (`success`)
- **Icon**: Speak_Icon.svg
- **Color**: Green (`#10b981`)
- **Use Case**: Successful operations, confirmations

## Props Configuration

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `type` | `'urgent' \| 'info' \| 'warning' \| 'success'` | Determines the alert style and icon |
| `title` | `string` | The main heading text for the alert |
| `message` | `string` | The alert message content (supports HTML) |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `testId` | `string` | `undefined` | Test identifier for automated testing |

### Inherited Props

The component extends `PConnFieldProps` from Pega's core library, inheriting additional properties for Pega integration.

## Usage Examples

### Basic Usage

```tsx
import PegaExtensionsContextualAlert from './PegaExtensionsContextualAlert';

// Info Alert
<PegaExtensionsContextualAlert
  type="info"
  title="Information"
  message="This is an informational alert with useful information."
/>

// Warning Alert
<PegaExtensionsContextualAlert
  type="warning"
  title="Warning"
  message="Please review the following information carefully."
/>

// Urgent Alert
<PegaExtensionsContextualAlert
  type="urgent"
  title="Urgent Action Required"
  message="This requires immediate attention."
/>

// Success Alert
<PegaExtensionsContextualAlert
  type="success"
  title="Success"
  message="Operation completed successfully!"
/>
```

### HTML Content Support

```tsx
<PegaExtensionsContextualAlert
  type="info"
  title="Rich Content"
  message="This alert supports <strong>HTML content</strong> including <em>emphasis</em> and <a href='#'>links</a>."
/>
```

## Technical Implementation

### Icon System
- Uses CSS masking to apply colors to SVG icons
- Icons are imported as URL strings and rendered using CSS mask properties
- Provides consistent coloring across different browsers

### HTML Sanitization
- Basic HTML sanitization removes `<script>` tags and `on*` attributes
- Supports common HTML elements like `<strong>`, `<em>`, `<a>`, lists, etc.
- Uses `dangerouslySetInnerHTML` with sanitized content

### Styling Architecture
- Built with `styled-components` for CSS-in-JS styling
- Responsive design with mobile-specific adjustments
- Minimal styling focuses on typography and spacing

## File Structure

```
Pega_Extensions_ContextualAlert/
├── index.tsx                 # Main component file
├── demo.stories.tsx          # Storybook stories for testing
├── styles.ts                 # Styled components
├── svg.d.ts                  # TypeScript declarations for SVG imports
├── PConnProps.d.ts          # Pega-specific type definitions
├── mock.ts                   # Mock data for stories
├── create-nonce.ts          # Security utilities
├── Attention_Icon.svg        # Urgent alert icon
├── Info_Icon.svg            # Info alert icon
├── Reminder_Icon.svg        # Warning alert icon
└── Speak_Icon.svg           # Success alert icon
```

## Customization Options

### Adding New Alert Types

To add a new alert type:

1. Add the new type to the `AlertType` union:
```tsx
type AlertType = 'urgent' | 'info' | 'warning' | 'success' | 'custom';
```

2. Add configuration to `alertConfig`:
```tsx
custom: {
  iconUrl: CustomIconUrl,
  className: 'alert-custom',
  textColor: '#your-color',
  iconColor: '#your-color'
}
```

3. Import your custom SVG icon

### Modifying Colors

Update the colors in the `alertConfig` object:

```tsx
const alertConfig = {
  urgent: {
    // ...existing config
    textColor: '#your-new-color',
    iconColor: '#your-new-color'
  }
  // ...other types
};
```

### Custom Styling

The component uses CSS classes that can be targeted:

- `.contextual-alert` - Main container
- `.alert-header` - Header section with icon and title
- `.alert-icon` - Icon container
- `.alert-title` - Title text
- `.alert-body` - Message content area
- `.alert-message` - Message text
- `.html-content` - HTML content wrapper
- `.text-content` - Plain text wrapper

## Browser Support

- Modern browsers supporting CSS mask properties
- Fallback support for browsers without mask support
- Responsive design works on mobile and desktop

## Accessibility Features

- `role="alert"` for screen reader announcements
- `aria-live="polite"` for dynamic content updates
- `aria-label` attributes on icons
- Semantic HTML structure
- Color contrast compliant text colors

## Security Considerations

- HTML content is sanitized to prevent XSS attacks
- Script tags and event handlers are stripped
- Safe HTML elements are preserved for formatting

## Testing

The component includes Storybook stories for visual testing:

- `InfoAlert` - Basic info alert example
- `WarningAlert` - Warning alert example  
- `UrgentAlert` - Urgent alert example
- `SuccessAlert` - Success alert example
- `HtmlMessage` - HTML content example

Run Storybook to test different configurations:
```bash
npm run startStorybook
```

## Migration Notes

If updating from a previous version:

- ✅ **Removed**: `dismissible` prop - alerts are no longer dismissible
- ✅ **Removed**: Background colors and borders
- ✅ **Added**: Custom SVG icon support
- ✅ **Changed**: Inline color styling instead of CSS classes

## Contributing

When contributing to this component:

1. Maintain the minimal design philosophy
2. Ensure accessibility compliance  
3. Add appropriate TypeScript types
4. Include Storybook examples
5. Update this documentation

## Support

For questions or issues related to this component, please refer to your Pega development team or internal documentation.
