# Dental Clinic Website - Complete Sections

A responsive React website showcasing a modern dental clinic with multiple sections including header, hero, about us, and services.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🖼️ Optimized images with lazy loading
- 🎯 Tailwind CSS for styling
- ⚡ Fast development with Vite
- 🎬 Interactive video modal
- 🎠 Horizontal scrolling services carousel
- 🎭 Smooth animations and hover effects

## Sections Included

### 1. **Header Section**
- Responsive navigation with dropdown menus
- Mobile hamburger menu
- Call-to-action buttons
- Colorful logo design

### 2. **Hero Section**
- Large hero heading with animated floating elements
- Video thumbnail with play button overlay
- YouTube video modal popup
- Responsive design for all devices

### 3. **About Us Section**
- Two-column layout with images and text
- Doctor name tags on main image
- Responsive image grid
- Call-to-action button

### 4. **Services Section**
- Horizontal scrolling service cards
- 6 different dental services
- Interactive navigation arrows
- Hover animations and effects

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system (version 16 or higher).

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:3000` and automatically open your browser.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.jsx              # Main app component
│   ├── Header.jsx           # Navigation header
│   ├── HeroSection.jsx      # Hero section with video
│   ├── AboutUsSection.jsx   # About Us section
│   ├── ServicesSection.jsx  # Services carousel
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Design Features

- **Color Scheme**: Warm, professional dental clinic colors
- **Typography**: Lora (serif) for headings, Poppins (sans-serif) for body text
- **Animations**: Floating elements, hover effects, smooth transitions
- **Responsive**: Mobile-first design that works on all screen sizes
- **Accessibility**: Proper alt tags, semantic HTML, keyboard navigation 