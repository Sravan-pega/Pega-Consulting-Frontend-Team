# Pega Extensions Embedded Table with Bulk Actions

A comprehensive, feature-rich data table component for Pega DX applications that supports CRUD operations, bulk actions, search, sorting, pagination, and extensive customization options.

## 🌟 Features

### Core Functionality
- **📊 Data Management**: Full CRUD (Create, Read, Update, Delete) operations
- **🔍 Search**: Real-time search across all table data
- **⬆️⬇️ Sorting**: Click column headers to sort data ascending/descending
- **📄 Pagination**: Configurable page size with navigation controls
- **✅ Row Selection**: Individual and bulk selection with checkboxes

### Bulk Actions
- **🗑️ Bulk Delete**: Delete multiple records at once
- **📈 Bulk Operations**: Extensible framework for custom bulk actions
- **🎯 Selection Management**: Smart selection with "Select All" functionality

### User Interface
- **💅 Modern Design**: Clean, professional table styling with hover effects
- **📱 Responsive**: Adapts to different screen sizes and devices
- **🎨 Customizable**: Fully styled with Pega Cosmos React Core components
- **♿ Accessible**: ARIA labels, keyboard navigation, and screen reader support

### Data Types Support
- **📧 Email Links**: Clickable mailto: links for email columns
- **📞 Phone Links**: Clickable tel: links for phone numbers
- **🌐 URLs**: External links that open in new windows
- **📅 Dates**: Formatted date display
- **✅ Booleans**: Yes/No text representation
- **🔢 Numbers**: Proper number formatting and input validation

### Modal Forms
- **➕ Add Records**: Modal form for adding new table entries
- **✏️ Edit Records**: Modal form for editing existing entries
- **🔄 Real-time Updates**: Immediate UI updates after changes
- **✅ Validation**: Required field validation and type checking

## 📋 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | "Data Table" | Table title displayed in header |
| `columns` | ColumnConfig[] | Default columns | Column configuration array |
| `data` | TableRecord[] | Sample data | Array of data records to display |
| `allowAdd` | boolean | true | Enable "Add Record" functionality |
| `allowEdit` | boolean | true | Enable edit action for records |
| `allowDelete` | boolean | true | Enable delete action for records |
| `allowBulkActions` | boolean | true | Enable bulk selection and actions |
| `allowSearch` | boolean | true | Show search input field |
| `allowSort` | boolean | true | Enable column sorting |
| `enableSelection` | boolean | true | Show selection checkboxes |
| `pageSize` | number | 10 | Number of records per page |
| `hideLabel` | boolean | false | Hide the table header/title |
| `actions` | ActionConfig[] | Default actions | Custom action buttons configuration |

## 🏗️ Column Configuration

Each column is configured using the `ColumnConfig` interface:

```typescript
interface ColumnConfig {
  key: string;           // Property key in data object
  label: string;         // Display name for column header
  sortable?: boolean;    // Enable sorting for this column
  filterable?: boolean;  // Enable filtering (future feature)
  type?: 'text' | 'number' | 'date' | 'boolean' | 'link' | 'email' | 'phone';
  formatter?: (value: any, record: TableRecord) => React.ReactNode;
}
```

### Example Column Configuration

```typescript
const columns = [
  { 
    key: 'name', 
    label: 'Full Name', 
    sortable: true, 
    type: 'text' 
  },
  { 
    key: 'email', 
    label: 'Email Address', 
    sortable: true, 
    type: 'email' 
  },
  { 
    key: 'phone', 
    label: 'Phone Number', 
    type: 'phone' 
  },
  { 
    key: 'status', 
    label: 'Status', 
    sortable: true, 
    type: 'text' 
  },
  { 
    key: 'joinDate', 
    label: 'Join Date', 
    sortable: true, 
    type: 'date' 
  }
];
```

## 🎯 Action Configuration

Custom actions can be configured for each row:

```typescript
const actions = [
  { 
    label: 'Edit', 
    action: 'edit', 
    type: 'secondary' 
  },
  { 
    label: 'Delete', 
    action: 'delete', 
    type: 'simple' 
  },
  { 
    label: 'View Profile', 
    action: 'view', 
    type: 'simple' 
  }
];
```

## 💻 Usage Examples

### Basic Implementation

```typescript
<PegaExtensionsEmbeddedTablewithBulkActions
  title="Employee Directory"
  allowAdd={true}
  allowEdit={true}
  allowDelete={true}
  allowSearch={true}
  enableSelection={true}
  pageSize={10}
/>
```

### Read-Only Table

```typescript
<PegaExtensionsEmbeddedTablewithBulkActions
  title="Report Data"
  allowAdd={false}
  allowEdit={false}
  allowDelete={false}
  allowBulkActions={false}
  enableSelection={false}
  allowSearch={true}
  allowSort={true}
/>
```

### Custom Data and Columns

```typescript
const customData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    department: 'Engineering',
    status: 'Active'
  }
];

const customColumns = [
  { key: 'name', label: 'Employee Name', sortable: true },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'status', label: 'Status', sortable: true }
];

<PegaExtensionsEmbeddedTablewithBulkActions
  title="Custom Employee Table"
  data={customData}
  columns={customColumns}
  pageSize={5}
/>
```

## 🔧 Pega Integration

The component integrates seamlessly with Pega's data layer:

### Data Binding
- Automatically updates Pega field values through `getPConnect()`
- Supports real-time data synchronization
- Handles state management through Pega's actions API

### Configuration in Pega
When configuring in Pega Designer:
1. **Table Title**: Set the display title
2. **Enable/Disable Features**: Toggle add, edit, delete, search, etc.
3. **Page Size**: Configure pagination
4. **Actions**: Define custom row-level actions

## 🎨 Styling and Theming

The component uses styled-components and includes:
- **Hover Effects**: Row highlighting on mouse over
- **Selection States**: Visual feedback for selected rows
- **Responsive Design**: Adapts to mobile and desktop layouts
- **Loading States**: Proper loading indicators
- **Error States**: User-friendly error messages

### CSS Classes Available
- `.data-table`: Main table styling
- `.sortable`: Sortable column headers
- `.modal-content`: Add/edit modal styling
- `.no-data`: Empty state message styling

## 🔍 Search Functionality

The search feature includes:
- **Real-time Search**: Results update as you type
- **All-Column Search**: Searches across all visible columns
- **Case-Insensitive**: Flexible matching
- **Performance Optimized**: Efficient filtering algorithms

## 📊 Sorting and Pagination

### Sorting
- **Multi-Column Support**: Sort by any sortable column
- **Direction Toggle**: Click to switch between ascending/descending
- **Visual Indicators**: Arrow icons show current sort direction
- **Data Type Aware**: Proper sorting for text, numbers, dates

### Pagination
- **Configurable Page Size**: 5, 10, 15, 20, 50, 100 records per page
- **Navigation Controls**: Previous/Next buttons
- **Page Information**: Shows current page and total pages
- **Record Count**: Displays total records and current range

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Logical tab order
- **High Contrast**: Accessible color schemes
- **Screen Reader Support**: Semantic HTML structure

## 🚀 Performance Considerations

- **Virtual Scrolling**: Efficient rendering for large datasets
- **Debounced Search**: Optimized search performance
- **Memoized Components**: Prevents unnecessary re-renders
- **Lazy Loading**: Load data as needed
- **Optimized Sorting**: In-memory sorting with fallback to server-side

## 🔧 Customization Options

### Custom Formatters
```typescript
const customColumns = [
  {
    key: 'salary',
    label: 'Salary',
    formatter: (value) => `$${value.toLocaleString()}`
  }
];
```

### Custom Actions
```typescript
const customActions = [
  {
    label: 'Send Email',
    action: 'sendEmail',
    type: 'primary'
  }
];
```

## 📱 Mobile Responsiveness

- **Adaptive Layout**: Adjusts to screen size
- **Touch Friendly**: Optimized for touch interactions
- **Compact Mode**: Smaller screens show essential columns only
- **Horizontal Scrolling**: Preserves data visibility on small screens

## 🧪 Testing

The component includes comprehensive testing coverage:
- **Unit Tests**: Individual function testing
- **Integration Tests**: Component interaction testing
- **Accessibility Tests**: WCAG compliance verification
- **Performance Tests**: Rendering and interaction benchmarks

## 🐛 Troubleshooting

### Common Issues

1. **Data Not Displaying**: Check data format and column key mapping
2. **Actions Not Working**: Verify getPConnect() function implementation
3. **Styling Issues**: Ensure styled-components are properly imported
4. **Performance**: Consider pagination for large datasets

### Debug Mode
Enable debug logging by setting `console.log` statements in action handlers.

## 🔄 Future Enhancements

- **Column Filtering**: Individual column filter dropdowns
- **Export Functions**: CSV, Excel, PDF export capabilities
- **Drag & Drop**: Row reordering functionality
- **Column Resizing**: Adjustable column widths
- **Advanced Search**: Query builder interface
- **Bulk Edit**: Edit multiple records simultaneously

---

## 📝 License

This component is part of the Pega Extensions library and follows Pega's licensing terms.

## 🤝 Contributing

For bug reports, feature requests, or contributions, please follow your organization's Pega development guidelines.
