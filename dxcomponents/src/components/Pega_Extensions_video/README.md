# Video Player Component

A video player component that fetches video configuration data from Pega data pages using PCore APIs.

## Overview

The Video Player component provides a data-driven way to embed and play video content in Pega applications. It exclusively uses data pages to load video configuration, making it fully dynamic and centrally manageable.

## Features

- **Data Page Integration**: Fetch video configuration from Pega data pages
- **Parameter Support**: Pass parameters to data pages for dynamic content
- **HTML5 Video Player**: Uses native browser video controls
- **Multiple Format Support**: Supports MP4, WebM, and OGG video formats
- **Responsive Design**: Configurable width and height with responsive options
- **Loading States**: Shows loading, error, and no-data states
- **Accessibility**: Built-in keyboard navigation and screen reader support

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `datapage` | string | undefined | **Required** - Name of the data page to fetch video configuration |
| `datapageparams` | string | undefined | Parameters for the data page (JSON or query string format) |
| `width` | string/number | '100%' | Video player width (CSS units or pixels) |
| `height` | string/number | 'auto' | Video player height (CSS units or pixels) |
| `autoplay` | boolean | false | Whether to start playing automatically |
| `muted` | boolean | false | Whether to start muted (required for autoplay) |
| `loop` | boolean | false | Whether to loop the video continuously |
| `testId` | string | undefined | Test identifier for automated testing |

## Data Page Configuration

### Required Properties

The component **requires** a `datapage` property to be configured. If no data page is provided, the component will show an error message.

### Data Page Parameters Format

Parameters can be provided in two formats:

1. **JSON Format**:
```json
{"videoId":"sample-video","quality":"high","category":"training"}
```

2. **Query String Format**:
```
videoId=sample-video&quality=high&category=training
```

### Expected Data Page Response

The data page **must** return an object with at least a `videoSource` property:

```json
{
  "videoSource": "https://example.com/video.mp4",
  "width": "800",
  "height": "450",
  "autoplay": false,
  "muted": false,
  "loop": false
}
```

## Usage Examples

### Basic Configuration
```json
{
  "datapage": "D_VideoData",
  "datapageparams": "{\"videoId\":\"training-001\"}",
  "width": "640",
  "height": "360"
}
```

### With JSON Parameters
```json
{
  "datapage": "D_VideoData",
  "datapageparams": "{\"videoId\":\"training-001\",\"quality\":\"high\"}",
  "width": "640",
  "height": "360"
}
```

### With Query String Parameters
```json
{
  "datapage": "D_VideoLibrary",
  "datapageparams": "categoryId=training&format=mp4&resolution=1080p",
  "width": "100%",
  "height": "auto"
}
```

### Responsive Configuration
```json
{
  "datapage": "D_VideoData",
  "datapageparams": "{\"videoId\":\"responsive-video\"}",
  "width": "100%",
  "height": "auto"
}
```

## Component States

### Storybook Fallback
When running in Storybook (where PConnect is not available), the component automatically uses intelligent fallback data based on the configured data page and parameters:

- **Default Video**: Big Buck Bunny (W3Schools sample) - used for most scenarios
- **Autoplay Videos**: For Bigger Blazes (for `videoId=autoplay-video`)
- **Responsive Videos**: Sintel (for `videoId=responsive-video`)

The fallback mechanism uses predefined video constants and destructuring with default values to provide a clean, maintainable approach while ensuring variety in Storybook stories.

### Loading State
Displayed while fetching data from the data page (in Pega environment):
```
Loading video...
```

### Error State
Displayed when data page fetch fails:
```
Failed to load video data: [Error message]
```

### No Data Page State
Displayed when no data page is configured (in Pega environment):
```
No data page configured
```

### No Video Source State
Displayed when data page doesn't return a video source:
```
No video source provided from data page
```

## Data Flow

1. **Component Mount**: Validates that `datapage` is provided
2. **Data Page Call**: Uses PCore APIs to call data page with parameters
3. **Response Processing**: Extracts video configuration from response
4. **Property Resolution**: Data page values override component properties
5. **Rendering**: Renders video player with effective configuration

## Error Handling

- **No Data Page**: Shows error message if no data page is configured
- **PCore Unavailable**: Shows error message if PCore APIs are not available
- **Data Page Error**: Shows error message with details if data page call fails
- **Invalid Parameters**: Logs parameter parsing errors and continues with empty params
- **No Video Source**: Shows error if data page doesn't return videoSource

## Browser Support

The component supports all modern browsers that support HTML5 video:
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge 12+
- iOS Safari 3.2+
- Android Browser 2.3+

## Video Format Recommendations

For maximum compatibility, provide videos in multiple formats:
- **MP4 (H.264)**: Best overall compatibility
- **WebM (VP9)**: Optimal for modern browsers
- **OGG (Theora)**: Fallback for older browsers

## Accessibility

The video player includes:
- Native browser keyboard controls
- Screen reader announcements
- Focus indicators
- Semantic HTML structure
- Loading and error state announcements

## Notes

- **Data page is mandatory** - The component will not work without a configured data page
- Data page values take precedence over component properties
- Autoplay requires the video to be muted in most modern browsers due to autoplay policies
- Large video files may impact page load performance
- Consider using a CDN or video streaming service for production use
- Parameter parsing supports both JSON and query string formats for flexibility
- The component gracefully handles data page failures with appropriate error messages
