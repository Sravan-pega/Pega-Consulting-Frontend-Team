# Pega Extensions Carousel with Data Component

## Overview

The **Pega Extensions Carousel with Data** is an advanced React component designed for Pega applications that extends the basic carousel functionality with **data page integration**. This component can dynamically load images from Pega data pages while maintaining all the interactive features of a standard carousel, including auto-play, navigation controls, and responsive design.

## Key Differentiators

### vs. Standard Carousel
- ✅ **Data Page Integration**: Loads images dynamically from Pega data pages
- ✅ **Multiple Data Sources**: Supports data pages, static URLs, and fallback images
- ✅ **Pega API Integration**: Uses both PCore (modern) and PegaRULES (legacy) APIs
- ✅ **Error Handling**: Graceful fallbacks when data pages fail to load
- ✅ **Loading States**: Visual feedback during data page operations

### Enhanced Features
- 🔄 **Dynamic Content**: Images update automatically when data page content changes
- 📊 **Data-Driven**: Perfect for showcasing dynamic content from databases
- 🔧 **Flexible Configuration**: Multiple property mapping options for data pages
- ⚡ **Performance Optimized**: Efficient data loading and caching
- 🛡️ **Error Resilient**: Continues to function even when data sources fail

## Visual Appearance

### Desktop Layout with Data Page Indicator
```
┌─────────────────────────────────────────────────────────┐
│ [Data Page: D_ImageData]         [◀]              [▶]   │
│                                                          │
│                 [Dynamic Image]                          │
│                                                          │
│                                                          │
│                    ● ○ ○ ○ ○                            │
└─────────────────────────────────────────────────────────┘
```

### Error State with Fallback
```
┌─────────────────────────────────────────────────────────┐
│ [⚠️ Data page error - Using default images]              │
│                 [◀]                              [▶]   │
│                                                          │
│                [Fallback Image]                          │
│                                                          │
│                    ● ○ ○ ○ ○                            │
└─────────────────────────────────────────────────────────┘
```

## Props Configuration

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `getPConnect` | `function` | Pega connection function for data page access |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string` | `''` | Comma-separated list of image URLs (fallback option) |
| `autoPlay` | `boolean` | `true` | Whether the carousel should automatically advance slides |
| `interval` | `number` | `5000` | Time in milliseconds between auto-advancing slides |
| `dataPage` | `string` | `''` | Name of the Pega data page to load images from |
| `imageUrlProperty` | `string` | `'imageUrl'` | Property name in data page records containing image URLs |
| `testId` | `string` | `undefined` | Test identifier for automated testing |

### Inherited Props

The component extends `PConnFieldProps` from Pega's core library, inheriting additional properties for Pega integration.

## Pega Configuration (App Studio)

### Basic Configuration

| Property | Field Type | Description | Example |
|----------|------------|-------------|---------|
| **Data Page Name** | Text | Name of data page containing images | `D_CarouselImages` |
| **Image URL Property** | Text | Property name for image URLs | `imageUrl` |
| **Image URLs** | Text | Comma-separated fallback URLs | `url1.jpg,url2.jpg` |
| **Auto Play** | Boolean | Enable automatic slide progression | ✅ Checked |
| **Auto Play Interval** | Number | Milliseconds between slides | `5000` |

### Advanced Configuration

| Property | Field Type | Description |
|----------|------------|-------------|
| **Alt Text Property** | Text | Property name for alt text in data pages |
| **Visible** | Visibility | Control component visibility with conditions |
| **Test ID** | Text | Identifier for testing automation |

### Configuration Priority

The component uses the following data source priority:

1. **Data Page Results** (highest priority)
2. **Static Image URLs** (fallback)
3. **Default Placeholder Images** (lowest priority)

## Data Page Integration

### Supported Data Page Formats

The component supports multiple data page response formats:

#### Standard Array Format
```json
[
  {
    "imageUrl": "https://example.com/image1.jpg",
    "altText": "Description 1"
  },
  {
    "imageUrl": "https://example.com/image2.jpg", 
    "altText": "Description 2"
  }
]
```

#### Pega pxResults Format
```json
{
  "pxResults": [
    {
      "imageUrl": "https://example.com/image1.jpg",
      "altText": "Description 1"
    }
  ]
}
```

#### Custom Data Format
```json
{
  "data": [
    {
      "url": "https://example.com/image1.jpg",
      "description": "Description 1"
    }
  ]
}
```

### Data Page APIs

The component automatically detects and uses the appropriate Pega API:

#### Modern PCore API (Preferred)
```javascript
window.PCore.getDataPageUtils().getDataAsync(dataPageName, contextName)
```

#### Legacy PegaRULES API (Fallback)
```javascript
window.PegaRULES.getDataPage(dataPageName)
```

### Property Mapping

Configure property names to match your data page structure:

| Configuration | Data Page Property | Description |
|---------------|-------------------|-------------|
| `imageUrlProperty: "imageUrl"` | `record.imageUrl` | Standard image URL field |
| `imageUrlProperty: "url"` | `record.url` | Alternative URL field |
| `imageUrlProperty: "src"` | `record.src` | HTML-style source field |

## Usage Examples

### Basic Data Page Configuration

```tsx
<PegaExtensionsCarouselWithData
  dataPage="D_CarouselImages"
  imageUrlProperty="imageUrl"
  autoPlay={true}
  interval={6000}
  getPConnect={getPConnect}
/>
```

### With Fallback Images

```tsx
<PegaExtensionsCarouselWithData
  dataPage="D_ProductImages"
  imageUrlProperty="productImageUrl"
  images="https://fallback1.jpg,https://fallback2.jpg"
  autoPlay={true}
  interval={4000}
  getPConnect={getPConnect}
/>
```

### Manual Navigation Only

```tsx
<PegaExtensionsCarouselWithData
  dataPage="D_GalleryImages"
  imageUrlProperty="galleryUrl"
  autoPlay={false}
  getPConnect={getPConnect}
/>
```

### Custom Property Mapping

```tsx
<PegaExtensionsCarouselWithData
  dataPage="D_MediaAssets"
  imageUrlProperty="assetUrl"
  altTextProperty="description"
  autoPlay={true}
  interval={8000}
  getPConnect={getPConnect}
/>
```

## Data Page Requirements

### Data Page Setup

#### 1. Create Data Page in Pega
```
Data Page Name: D_CarouselImages
Source: Connector/Activity/Report Definition
Structure: List
```

#### 2. Configure Data Structure
```json
{
  "imageUrl": "String - Full URL to image",
  "altText": "String - Descriptive text (optional)",
  "title": "String - Image title (optional)"
}
```

#### 3. Sample Data Page Activity
```java
// Activity: GetCarouselImages
Step 1: Database query or API call
Step 2: Map results to expected format
  .imageUrl = <source>.ImageURL
  .altText = <source>.Description
```

### Data Validation

The component validates data page responses:

- ✅ **Array Format**: Direct array of image objects
- ✅ **pxResults Wrapper**: Pega standard response format
- ✅ **Custom Data Wrapper**: Flexible data property support
- ❌ **Invalid Format**: Shows error message with fallback images

## Error Handling

### Error States

#### Data Page Not Found
```
Error: Data page 'D_MissingPage' not found - Using default images
```

#### Invalid Data Format
```
Error: Data page returned invalid format - Using default images
```

#### Network/API Issues
```
Error: Failed to load data page via PCore: Network timeout - Using default images
```

#### No Pega Context
```
Error: Data page specified but no Pega connection available
```

### Fallback Behavior

1. **Show Error Message**: Red overlay with error details
2. **Continue Operation**: Carousel still functions normally
3. **Use Fallback Images**: Static images or defaults
4. **Maintain Interactivity**: All navigation controls remain active

## Interactive Features

### Mouse Interaction
- **Hover**: Pauses auto-play during data loading
- **Click Navigation**: Previous/next buttons
- **Indicator Dots**: Direct slide navigation
- **Loading States**: Visual feedback during data operations

### Keyboard Navigation  
- **Arrow Left/Right**: Navigate slides
- **Home/End**: Jump to first/last slide
- **Tab Navigation**: Accessible control focus
- **Enter/Space**: Activate focused controls

### Loading States
- **Data Page Loading**: "Loading images from data page..."
- **Error with Fallback**: Error message + functional carousel
- **Default Images**: Blue indicator when using defaults

## Performance Considerations

### Data Loading
- **Asynchronous**: Non-blocking data page requests
- **Error Recovery**: Graceful fallbacks maintain user experience
- **Memory Efficient**: Only current data set maintained in state
- **Network Optimized**: Single data page request per component instance

### Image Handling
- **Lazy Loading**: Images load as needed
- **Error Placeholders**: Broken images show informative placeholders
- **Optimal Sizing**: Configurable image dimensions

### Auto-Play Management
- **Pauses During Loading**: Prevents disorientation during data refresh
- **Context Awareness**: Respects user interaction patterns
- **Clean Disposal**: Proper cleanup of intervals and event listeners

## Demo Stories

### Available Storybook Examples

#### 1. **DefaultCarouselClone** Story
```tsx
{
  images: "https://picsum.photos/800/400?random=10,https://picsum.photos/800/400?random=11,https://picsum.photos/800/400?random=12",
  autoPlay: true,
  interval: 4000
}
```
*Features: Standard carousel with static image fallbacks*

#### 2. **DataPageConfiguration** Story
```tsx
{
  dataPage: "D_ImageCarouselData",
  imageUrlProperty: "imageUrl", 
  autoPlay: true,
  interval: 6000
}
```
*Features: Demonstrates data page integration and API usage*

#### 3. **SlowAutoPlayClone** Story
```tsx
{
  images: "static-urls...",
  autoPlay: true,
  interval: 7000
}
```
*Features: Slower auto-play for detailed content viewing*

#### 4. **ManualClone** Story
```tsx
{
  images: "static-urls...",
  autoPlay: false
}
```
*Features: Manual navigation only, no auto-advance*

#### 5. **DefaultImagesWhenEmpty** Story
```tsx
{
  images: "",
  dataPage: "",
  autoPlay: true,
  interval: 4000
}
```
*Features: Shows default placeholder behavior*

#### 6. **CommaSeparatedUrlsClone** Story
```tsx
{
  images: "editable-input-field",
  autoPlay: true,
  interval: 4000
}
```
*Features: Interactive demo with editable URL input*

### Running the Demos

```bash
# Start Storybook development server
npm run startStorybook

# Navigate to "Extensions/Image Carousel Clone" in the sidebar
# Available at http://localhost:6040
```

## File Structure

```
Pega_Extensions_CarouselWithData/
├── index.tsx                 # Main component with data page integration
├── config.json              # Pega App Studio configuration  
├── demo.stories.tsx          # Storybook stories and examples
├── styles.ts                 # Styled components and CSS
├── PConnProps.d.ts          # Pega-specific type definitions
├── mock.ts                   # Mock data for stories
└── create-nonce.ts          # Security utilities
```

## Customization Options

### Data Source Customization

Configure property mappings for different data structures:

```tsx
// For custom data page structure
<PegaExtensionsCarouselWithData
  dataPage="D_CustomImages"
  imageUrlProperty="customUrlField"
  altTextProperty="customDescField"
/>
```

### Styling Customization

Same CSS classes as standard carousel:

- `.carousel-container` - Main wrapper  
- `.carousel-track` - Sliding container
- `.carousel-image` - Image elements
- `.carousel-control` - Navigation buttons
- `.indicator` - Dot indicators

### API Integration

Extend the data loading logic for custom APIs:

```tsx
// Add custom data source handling
const fetchCustomData = async () => {
  // Custom API integration
  const response = await customAPI.getData();
  return response.images;
};
```

## Security Considerations

### Data Page Security
- **Access Controls**: Ensure data pages have appropriate access rules
- **Data Validation**: Validate image URLs from data pages
- **XSS Prevention**: URLs are not executed as JavaScript  
- **HTTPS**: Recommend secure image URLs

### Image Loading Security
- **URL Validation**: Verify image source domains
- **CSP Headers**: Configure Content Security Policy for images
- **Error Handling**: Prevent information disclosure through error messages

## Troubleshooting

### Common Issues

#### Data Page Not Loading
```
Error: Data page specified but no Pega connection available
```
**Solution**: Ensure `getPConnect` prop is provided and component is used within Pega runtime.

#### Images Not Displaying
```
Error: Data page returned invalid format
```
**Solution**: Check data page response format and property mapping configuration.

#### Performance Issues
```
Slow loading or timeout errors
```
**Solution**: Optimize data page queries and implement caching strategies.

### Data Page Issues

#### Access Permissions
- Verify data page access rules in Pega
- Check user permissions for data page execution
- Ensure proper security context

#### API Compatibility  
- Confirm PCore API availability for modern Pega versions
- Test PegaRULES fallback for older versions
- Validate data page response formats

## Migration from Standard Carousel

### Upgrade Path

1. **Install Component**: Add CarouselWithData to your library
2. **Update Configuration**: Add data page properties
3. **Test Integration**: Verify data page connectivity
4. **Migrate Gradually**: Replace standard carousels incrementally

### Configuration Mapping

| Standard Carousel | CarouselWithData | Notes |
|------------------|------------------|--------|
| `images` prop | `images` prop | Same functionality |
| `autoPlay` prop | `autoPlay` prop | Same functionality |
| `interval` prop | `interval` prop | Same functionality |
| N/A | `dataPage` prop | **New**: Data page name |
| N/A | `imageUrlProperty` prop | **New**: Property mapping |

## Future Enhancements

### Planned Features
- 🔄 **Real-time Updates**: Automatic refresh when data pages change
- 📊 **Analytics Integration**: Track carousel interaction metrics
- 🎨 **Template Support**: Configurable slide templates
- 🔗 **Click Actions**: Custom handlers for image clicks
- 📱 **Swipe Gestures**: Touch navigation for mobile

### API Enhancements
- Support for paginated data pages
- Background refresh capabilities  
- Cache management strategies
- Advanced error recovery options

## Contributing

When contributing to this component:

1. **Test Data Integration**: Verify both PCore and PegaRULES API compatibility
2. **Error Handling**: Ensure graceful degradation for all failure scenarios
3. **Performance**: Monitor data loading performance and optimize queries
4. **Documentation**: Update this README with new data page features
5. **Stories**: Add Storybook examples for new functionality

## Support

For questions or issues related to this component:

- **Data Page Issues**: Consult Pega data page documentation
- **API Problems**: Check Pega runtime environment and versions
- **Configuration**: Review App Studio field mappings
- **Performance**: Analyze data page query efficiency
- **Integration**: Contact your Pega development team for runtime issues
