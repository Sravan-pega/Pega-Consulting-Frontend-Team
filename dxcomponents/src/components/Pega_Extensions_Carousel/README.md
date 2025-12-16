# Pega Extensions Carousel Component

## Overview

The **Pega Extensions Carousel** is a React component designed for Pega applications that provides a fully-featured image carousel with auto-play functionality, navigation controls, and responsive design. This component allows users to display multiple images in a rotating slideshow format with smooth transitions and interactive controls.

## Features

- 🎠 **Interactive Slideshow**: Display multiple images in a rotating carousel format
- ▶️ **Auto-play**: Automatic slide progression with customizable intervals
- 🖱️ **Mouse Controls**: Hover to pause auto-play, click navigation buttons
- ⌨️ **Keyboard Navigation**: Full keyboard accessibility with arrow keys, Home/End
- 📱 **Responsive Design**: Adapts to different screen sizes (desktop, tablet, mobile)
- 🔍 **Image Error Handling**: Fallback placeholders for broken images
- 🎯 **Navigation Indicators**: Dot indicators for direct slide navigation
- ♿ **Accessibility**: ARIA labels, focus management, and screen reader support
- 🔧 **Flexible Configuration**: Supports both custom images and default placeholders

## Visual Appearance

### Desktop Layout
```
┌─────────────────────────────────────────────────────────┐
│  [◀]                                              [▶]   │
│                                                          │
│                 [Current Image]                          │
│                                                          │
│                                                          │
│                    ● ○ ○ ○ ○                            │
└─────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌─────────────────────────────────┐
│ [◀]                       [▶]   │
│                                 │
│        [Current Image]          │
│                                 │
│          ● ○ ○ ○ ○              │
└─────────────────────────────────┘
```

## Props Configuration

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `images` | `string` | Comma-separated list of image URLs to display in the carousel |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoPlay` | `boolean` | `true` | Whether the carousel should automatically advance slides |
| `interval` | `number` | `5000` | Time in milliseconds between auto-advancing slides |
| `testId` | `string` | `undefined` | Test identifier for automated testing |

### Inherited Props

The component extends `PConnFieldProps` from Pega's core library, inheriting additional properties for Pega integration.

## Pega Configuration (App Studio)

When configuring the component in Pega App Studio, you have the following options:

### Basic Configuration

| Property | Field Type | Description | Example |
|----------|------------|-------------|---------|
| **Image URLs** | Text | Comma-separated list of image URLs | `url1.jpg, url2.jpg, url3.jpg` |
| **Auto Play** | Checkbox | Enable/disable automatic slide progression | ✅ Checked |
| **Auto Play Interval** | Number | Milliseconds between slides (minimum 1000) | `5000` |

### Advanced Configuration

| Property | Field Type | Description |
|----------|------------|-------------|
| **Visible** | Visibility | Control component visibility with conditions |
| **Test ID** | Text | Identifier for testing automation |

### Configuration Examples

#### Basic Setup
```
Image URLs: https://example.com/image1.jpg, https://example.com/image2.jpg
Auto Play: ✅ Enabled
Interval: 5000
```

#### Manual Navigation Only
```
Image URLs: https://example.com/slide1.png, https://example.com/slide2.png
Auto Play: ❌ Disabled
Interval: 5000 (ignored when auto-play is off)
```

#### Fast Auto-Play
```
Image URLs: https://gallery.com/pic1.jpg, https://gallery.com/pic2.jpg
Auto Play: ✅ Enabled
Interval: 2000 (2 seconds)
```

## Usage Examples

### Basic Implementation

```tsx
import PegaExtensionsCarousel from './PegaExtensionsCarousel';

// Basic carousel with default settings
<PegaExtensionsCarousel
  images="https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3"
  autoPlay={true}
  interval={5000}
/>
```

### Manual Navigation Only

```tsx
<PegaExtensionsCarousel
  images="https://example.com/slide1.jpg,https://example.com/slide2.jpg,https://example.com/slide3.jpg"
  autoPlay={false}
  testId="manual-carousel"
/>
```

### Fast Auto-Play Carousel

```tsx
<PegaExtensionsCarousel
  images="https://api.unsplash.com/photos/featured?w=800&h=400"
  autoPlay={true}
  interval={2000}
/>
```

### Empty State (Uses Default Images)

```tsx
<PegaExtensionsCarousel
  images=""
  autoPlay={true}
  interval={3000}
/>
```

## Image URL Format

### Supported Formats
- **HTTP/HTTPS URLs**: `https://example.com/image.jpg`
- **Data URLs**: `data:image/jpeg;base64,/9j/4AAQ...`
- **Relative URLs**: `./assets/image.png`

### Input Format
Images should be provided as a **comma-separated string**:

```
"https://example.com/image1.jpg, https://example.com/image2.png, https://example.com/image3.gif"
```

### Image Requirements
- **Recommended Size**: 800x400 pixels (2:1 aspect ratio)
- **Supported Formats**: JPG, PNG, GIF, WebP, SVG
- **Max File Size**: No specific limit, but optimize for web performance
- **Accessibility**: Include descriptive alt text when possible

## Default Behavior

### Default Images
When no images are provided or the images string is empty, the carousel automatically displays 5 placeholder images from Picsum Photos:

```
https://picsum.photos/800/400?random=1
https://picsum.photos/800/400?random=2
https://picsum.photos/800/400?random=3
https://picsum.photos/800/400?random=4
https://picsum.photos/800/400?random=5
```

A blue indicator badge appears showing "Loading default images" when using defaults.

### Error Handling
- **Broken Images**: Automatically replaced with placeholder showing "Image X Not Found"
- **Invalid URLs**: Gracefully handled with fallback placeholders
- **Network Issues**: Shows placeholder until images load

## Interactive Features

### Mouse Interaction
- **Hover**: Pauses auto-play while mouse is over the carousel
- **Click**: Navigation buttons advance/reverse slides
- **Indicators**: Click dots to jump to specific slides

### Keyboard Navigation
- **Arrow Left**: Previous slide
- **Arrow Right**: Next slide
- **Home**: Jump to first slide
- **End**: Jump to last slide
- **Tab**: Navigate through controls
- **Enter/Space**: Activate focused control

### Touch/Mobile
- **Responsive Design**: Optimized layouts for mobile devices
- **Touch-Friendly**: Larger buttons and indicators on mobile
- **Swipe Support**: Currently not implemented (future enhancement)

## Accessibility Features

### ARIA Support
- `role="region"` with `aria-label="Image carousel"`
- Navigation buttons have descriptive `aria-label` attributes
- Indicators include `aria-pressed` state for current slide
- Focus management with proper tab order

### Screen Reader Support
- Descriptive alt text for all images (`Slide X`)
- Clear labeling of navigation controls
- Status announcements for slide changes

### Keyboard Navigation
- Full keyboard accessibility
- Visible focus indicators
- Logical tab order through controls

## Responsive Breakpoints

### Desktop (769px+)
- Carousel height: 400px
- Control buttons: 50px diameter
- Indicators: 12px diameter

### Tablet (480px - 768px)
- Carousel height: 250px  
- Control buttons: 40px diameter
- Indicators: 10px diameter

### Mobile (< 480px)
- Carousel height: 200px
- Control buttons: 35px diameter
- Condensed spacing and margins

## Performance Considerations

### Image Loading
- Images load as needed (no preloading)
- Error handling prevents broken image display
- Placeholder fallbacks for failed loads

### Memory Usage
- Only current slide images are actively rendered
- Efficient DOM management with minimal elements
- CSS transforms for smooth animations

### Auto-Play Management
- Pauses during hover to reduce CPU usage
- Cleans up intervals on component unmount
- Respects user interaction to pause/resume

## Demo Stories

### Available Storybook Examples

#### 1. **DefaultCarousel** Story
```tsx
{
  images: "https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3",
  autoPlay: true,
  interval: 5000
}
```
*Features: Standard auto-playing carousel with 5-second intervals*

#### 2. **AutoPlayDisabled** Story  
```tsx
{
  images: "https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3",
  autoPlay: false,
  interval: 5000
}
```
*Features: Manual navigation only, no auto-advance*

#### 3. **FastAutoPlay** Story
```tsx
{
  images: "https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3",
  autoPlay: true,
  interval: 2000
}
```
*Features: Fast auto-play with 2-second intervals*

#### 4. **DefaultImagesWhenEmpty** Story
```tsx
{
  images: "",
  autoPlay: true,
  interval: 3000
}
```
*Features: Shows default placeholder images when no URLs provided*

#### 5. **CommaSeparatedUrls** Story
```tsx
{
  images: "https://picsum.photos/800/400?random=10, https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=30",
  autoPlay: true,
  interval: 4000
}
```
*Features: Interactive demo with editable URL input field*

### Running the Demos

```bash
# Start Storybook development server
npm run startStorybook

# Navigate to "Extensions/Image Carousel" in the sidebar
# Available at http://localhost:6040
```

### Storybook Interactive Controls

- **autoPlay**: Toggle auto-advance on/off
- **interval**: Adjust timing between slides (milliseconds)
- **images**: Edit comma-separated URL string
- **Real-time Updates**: See changes instantly

## File Structure

```
Pega_Extensions_Carousel/
├── index.tsx                 # Main component file
├── config.json              # Pega App Studio configuration
├── demo.stories.tsx          # Storybook stories and examples
├── styles.ts                 # Styled components and CSS
├── PConnProps.d.ts          # Pega-specific type definitions
├── mock.ts                   # Mock data for stories
└── create-nonce.ts          # Security utilities
```

## Customization Options

### Styling Customization

The component uses CSS classes that can be targeted for custom styling:

- `.carousel-container` - Main wrapper with shadow and border
- `.carousel-wrapper` - Image display area
- `.carousel-track` - Sliding image container
- `.carousel-slide` - Individual slide wrapper
- `.carousel-image` - Image element
- `.carousel-control` - Navigation buttons (`.prev`, `.next`)
- `.carousel-indicators` - Dot indicator container
- `.indicator` - Individual dot (`.active` for current)

### Custom Image Sizes

Modify the styles to accommodate different aspect ratios:

```css
.carousel-wrapper {
  height: 300px; /* Adjust height as needed */
}

.carousel-image {
  object-fit: contain; /* or 'fill', 'cover', etc. */
}
```

### Custom Colors

```css
.carousel-control {
  background: rgba(255, 255, 255, 0.8);
  color: #333;
}

.indicator.active {
  background: #ff6b6b;
}
```

## Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 80+
- **CSS Features**: Transform, transition, flexbox support required
- **JavaScript**: ES6+ features (arrow functions, destructuring, etc.)
- **Mobile**: iOS Safari 12+, Android Chrome 60+

## Security Considerations

- **Image URLs**: Validate and sanitize image URLs in production
- **CSP Headers**: Ensure Content Security Policy allows image sources
- **XSS Prevention**: URLs are not executed as JavaScript
- **HTTPS**: Recommend HTTPS URLs for secure loading

## Troubleshooting

### Common Issues

#### Images Not Loading
- **Check URLs**: Ensure all image URLs are valid and accessible
- **CORS Issues**: Verify cross-origin image loading permissions
- **Network**: Check network connectivity and image server status

#### Auto-Play Not Working
- **Browser Policy**: Some browsers block auto-play until user interaction
- **Focus State**: Auto-play pauses when carousel is hovered
- **Single Image**: Auto-play disabled with only one image

#### Navigation Not Responding  
- **JavaScript Errors**: Check browser console for errors
- **Event Conflicts**: Ensure no other components are capturing events
- **CSS Issues**: Verify navigation buttons are not hidden

### Performance Issues

#### Slow Loading
- **Image Optimization**: Compress images and use appropriate formats
- **CDN Usage**: Use Content Delivery Networks for faster loading
- **Image Dimensions**: Optimize images to carousel display size

#### Memory Usage
- **Large Images**: Reduce image file sizes
- **Many Carousels**: Limit number of carousel instances per page

## Migration and Updates

### Upgrading from Previous Versions

If updating from an older version:

- ✅ **Image Property**: Still uses comma-separated string format
- ✅ **Auto-Play**: Behavior remains consistent
- ✅ **Keyboard Navigation**: Enhanced with Home/End key support
- ✅ **Accessibility**: Improved ARIA labels and focus management

### Future Enhancements

Planned features for future versions:

- 🔄 **Swipe Support**: Touch gestures for mobile navigation
- 🎨 **Theme Customization**: Pre-built color themes
- 📹 **Video Support**: Mixed image/video content
- 🔗 **Click Actions**: Configurable click handlers for images

## Contributing

When contributing to this component:

1. **Maintain Accessibility**: Ensure all features work with keyboard/screen readers
2. **Mobile-First**: Test on various device sizes
3. **Performance**: Optimize for smooth animations and minimal resource usage
4. **Documentation**: Update this README with any new features
5. **Stories**: Add Storybook examples for new functionality

## Support

For questions or issues related to this component:

- Check the Storybook examples for usage patterns
- Review the configuration options in `config.json`
- Consult your Pega development team for App Studio integration
- Submit bug reports with clear reproduction steps
