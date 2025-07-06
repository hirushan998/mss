# MSS Solutions Assets

This folder contains all the assets used in the MSS Solutions website, organized into logical subfolders for easy maintenance and scalability.

## Folder Structure

\`\`\`
assets/
├── config/          # Configuration files
├── data/           # JSON data files
├── docs/           # Documentation
├── icons/          # SVG icons and logos
├── images/         # Image assets (placeholder structure)
├── scripts/        # JavaScript utilities
└── styles/         # CSS stylesheets
\`\`\`

## Configuration Files (`/config`)

- `theme.json` - Theme configuration including colors, typography, spacing
- `seo.json` - SEO metadata and structured data configuration

## Data Files (`/data`)

- `company.json` - Company information, stats, and contact details
- `services.json` - Service offerings with detailed information
- `testimonials.json` - Client testimonials and reviews
- `team.json` - Team member profiles and information
- `projects.json` - Case studies and project portfolios
- `partners.json` - Technology partners and certifications

## Icons (`/icons`)

- `logo.svg` - Main company logo
- `arrow-right.svg` - Right arrow icon
- `check-circle.svg` - Check circle icon
- `star.svg` - Star rating icon
- `quote.svg` - Quote/testimonial icon
- `whatsapp.svg` - WhatsApp icon
- `menu.svg` - Mobile menu icon
- `close.svg` - Close/X icon
- `chevron-left.svg` - Left chevron
- `chevron-right.svg` - Right chevron

## Scripts (`/scripts`)

- `utils.js` - General utility functions
- `animations.js` - Animation controllers and utilities

## Styles (`/styles`)

- `animations.css` - Animation keyframes and utility classes
- `components.css` - Component-specific styles and utilities

## Usage Guidelines

### Importing Data
\`\`\`javascript
import testimonials from '@/assets/data/testimonials.json'
import services from '@/assets/data/services.json'
\`\`\`

### Using Icons
\`\`\`jsx
import Logo from '@/assets/icons/logo.png'
import ArrowRight from '@/assets/icons/arrow-right.png'
\`\`\`

### Importing Utilities
\`\`\`javascript
import { smoothScrollTo, debounce } from '@/assets/scripts/utils.js'
import { ScrollAnimationController } from '@/assets/scripts/animations.js'
\`\`\`

### Using Styles
\`\`\`css
@import '@/assets/styles/animations.css';
@import '@/assets/styles/components.css';
\`\`\`

## Maintenance

- Keep data files updated with current information
- Optimize SVG icons for performance
- Update theme configuration as design evolves
- Document any new utility functions
- Maintain consistent naming conventions

## Performance Considerations

- SVG icons are optimized for web use
- JSON data files are structured for efficient parsing
- CSS animations use GPU acceleration where possible
- JavaScript utilities include performance optimizations

## Accessibility

- SVG icons include proper titles and descriptions
- Color schemes meet WCAG contrast requirements
- Animation utilities respect `prefers-reduced-motion`
- Semantic markup is maintained throughout
