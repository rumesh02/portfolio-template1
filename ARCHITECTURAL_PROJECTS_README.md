# Architectural Projects Section

## Overview

I've created a brand new **Architectural Projects** section that implements the "deck of cards" scroll effect you requested. Here's how it works:

## Features

### 🃏 **Deck of Cards Effect**

- Each architectural project is displayed as a **stack of cards**
- Cards reveal one by one as you scroll down through the section
- Only after all cards in a project are shown, scrolling moves to the next project

### 📱 **Scroll-Based Animation**

- **Sticky positioning**: The card stack stays in view while scrolling
- **Smooth transitions**: Cards appear with fade and slide animations
- **Progress tracking**: Visual indicators show current project and card progress

### 🎨 **Visual Design**

- **3D stacking effect**: Cards are layered with depth and shadow
- **Theme support**: Fully integrated with your dark/light mode switching
- **Responsive layout**: Works perfectly on desktop and mobile

## Project Structure

Each project contains:

- **Project Overview**: General information and key features
- **Detailed Views**: Multiple cards showing different aspects (exterior, interior, amenities, etc.)
- **Interactive Elements**: Hover effects and smooth animations

## Sample Projects Included

1. **Modern Residential Complex** (Colombo, 2024)

   - Overview, Exterior Design, Interior Spaces, Amenities

2. **Cultural Arts Center** (Kandy, 2023)

   - Cultural Vision, Architectural Form, Performance Spaces, Community Impact

3. **Sustainable Office Tower** (Galle, 2023)
   - Green Innovation, Sustainability Features, Modern Workspaces, Smart Building Systems

## How It Works

1. **Scroll Detection**: The component detects when you're scrolling within the section
2. **Progress Calculation**: Calculates which project and card should be visible based on scroll position
3. **Card Stacking**: Uses CSS transforms to create the 3D stacking effect
4. **Smooth Transitions**: Cards appear with custom animations and proper timing

## Navigation Integration

- Added "Architecture" link to your main navigation
- Smooth scroll behavior when clicked
- Mobile-responsive navigation

## Customization

You can easily:

- **Add more projects**: Update the `ARCHITECTURAL_PROJECTS` array
- **Change card content**: Modify the project data structure
- **Add real images**: Replace the placeholder image paths
- **Adjust animations**: Modify the CSS keyframes in `index.css`

## Technical Implementation

- **React Hooks**: Uses `useState`, `useEffect`, `useRef` for state management
- **Intersection Observer**: Detects when section is in viewport
- **Scroll Calculations**: Precise scroll progress tracking
- **CSS Animations**: Custom keyframes for smooth card reveals
- **Theme Integration**: Full support for your existing dark/light mode system

## To Test

Run `npm start` and navigate to the new "Architecture" section in your portfolio. You'll see the card deck effect in action as you scroll through each project!

The section is positioned between your Portfolio and Contact sections, providing a perfect showcase for your architectural work.
