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

## Visual Examples

### Component Appearance

The component renders as clean, minimal alerts with colored icons and text:

```
🔴 **Urgent Action Required**
   This is an urgent alert that requires immediate attention.

ℹ️ **Information**
   This is an informational alert with useful information.

⚠️ **Warning** 
   Please review the following information carefully.

✅ **Success**
   Operation completed successfully!
```

### Actual Rendered Output

When rendered in your application, the alerts appear as:

- **No backgrounds or borders** - Clean, minimal design
- **Colored icons** - SVG icons tinted to match the alert type
- **Colored text** - Title and message text in theme colors
- **Responsive layout** - Icon and text properly aligned

## Alert Types

### 1. Urgent (`urgent`)
- **Icon**: Attention_Icon.svg
- **Color**: Red (`#dc2626`)
- **Use Case**: Critical errors, immediate action required
- **Visual**: Red attention icon with red text

### 2. Info (`info`)
- **Icon**: Info_Icon.svg  
- **Color**: Blue (`#3b82f6`)
- **Use Case**: General information, tips, guidance
- **Visual**: Blue info icon with blue text

### 3. Warning (`warning`)
- **Icon**: Reminder_Icon.svg
- **Color**: Orange (`#f59e0b`)
- **Use Case**: Important notices, potential issues
- **Visual**: Orange reminder icon with orange text

### 4. Success (`success`)
- **Icon**: Speak_Icon.svg
- **Color**: Green (`#10b981`)
- **Use Case**: Successful operations, confirmations
- **Visual**: Green speak icon with green text

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

## Component Structure

### Layout Overview

```
┌─────────────────────────────────────────┐
│ [Icon] **Alert Title**                  │
│        Alert message content goes here. │
│        Supports HTML formatting.        │
└─────────────────────────────────────────┘
```

### HTML Output Structure

```html
<div data-testid="test-id">
  <div class="contextual-alert alert-info" role="alert" aria-live="polite">
    <div class="alert-header">
      <div class="alert-icon">
        <div role="img" aria-label="info" style="..."></div>
      </div>
      <div class="alert-title">
        <strong style="color: #3b82f6;">Alert Title</strong>
      </div>
    </div>
    <div class="alert-body">
      <div class="alert-message text-content" style="color: #3b82f6;">
        Alert message content
      </div>
    </div>
  </div>
</div>
```

### Responsive Behavior

- **Desktop**: Full-sized icons (20px), normal padding and spacing
- **Mobile**: Slightly smaller text, reduced padding for better mobile experience
- **Icon positioning**: Always aligned to the top-left for multi-line messages

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

## Demo Stories & Testing

### Available Storybook Stories

The component includes comprehensive Storybook stories for visual testing and demonstration:

#### 1. **InfoAlert** Story
```tsx
{
  type: 'info',
  title: 'Information',
  message: 'This is an informational alert with some useful information.'
}
```
*Displays: Blue info icon with informational message*

#### 2. **WarningAlert** Story
```tsx
{
  type: 'warning',
  title: 'Warning',
  message: 'This is a warning alert. Please review the following information carefully.'
}
```
*Displays: Orange warning icon with cautionary message*

#### 3. **UrgentAlert** Story
```tsx
{
  type: 'urgent',
  title: 'Urgent Action Required',
  message: 'This is an urgent alert that requires immediate attention.'
}
```
*Displays: Red attention icon with urgent message*

#### 4. **SuccessAlert** Story
```tsx
{
  type: 'success',
  title: 'Success',
  message: 'Operation completed successfully! Your changes have been saved.'
}
```
*Displays: Green success icon with confirmation message*

#### 5. **HtmlMessage** Story
```tsx
{
  type: 'info',
  title: 'HTML Content',
  message: 'This alert supports <strong>HTML content</strong> including <em>emphasis</em> and <a href="#">links</a>.'
}
```
*Displays: Rich HTML content with formatted text and links*

### Running the Demo

To view all stories and interact with the component:

```bash
# Start Storybook development server
npm run startStorybook

# Open browser to http://localhost:6040
# Navigate to "PegaExtensionsContextualAlert" in the sidebar
```

### Interactive Controls

In Storybook, you can dynamically modify:
- **type**: Switch between urgent, info, warning, success
- **title**: Change the alert title text
- **message**: Modify the alert message content (supports HTML)

### Story Features

- **Live Preview**: See real-time component rendering
- **Interactive Controls**: Modify props and see instant updates  
- **Responsive Testing**: Resize viewport to test mobile/desktop layouts
- **Accessibility Testing**: Built-in a11y addon for compliance checking
- **Code Examples**: View the exact code for each story

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
