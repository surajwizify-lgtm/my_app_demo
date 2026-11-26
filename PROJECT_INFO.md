# Project Info

## Project Name
My App Demo (Medical Services App - UI Demo)

## Purpose
A React-based UI demo of a Flutter medical services app to present to the client for a redesign proposal.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Router DOM (routing)
- Fonts: Fraunces (headings), Manrope (body)

## Deployment
- Platform: Vercel
- Permanent URL: https://my-app-demo-nine.vercel.app

## Design
- Mobile only layout (max-width: 480px centered in Layout.jsx)
- Color scheme: Deep blue medical theme (primary: #0e4c6b, secondary: #0b84c4)
- Path alias: @ → src/

## Architecture
- src/assets/
- src/components/
  - common/ (shared components)
  - home/ (homepage sections)
  - hospital/ (hospital listing + detail tabs)
  - tests/ (lab tests listing)
  - cart/ (cart items, summary, checkout)
  - orders/ (order cards)
  - auth/ (login/signup)
  - profile/ (profile header + form)
- src/pages/
- src/routes/
- src/styles/theme.js

## Design Decisions
- Layout.jsx handles max-width, min-height, and BottomNav visibility based on the current route.
- Pages should not include their own maxWidth/minHeight wrappers.
- Home Article cards: horizontal scroll, Unsplash image, date badge (green pill) top-left, title with 2-line clamp below.
- Home Article categories: 2-column grid, pastel bg cards, Unsplash image (rounded), title + subtitle.
- Home Campaign cards: horizontal scroll, full image background with dark gradient overlay, label badge top-left, date + Join Now bottom row, animated dot indicators.
- Home Top Specialties: Expandable list cards. Tap to expand and show treatment tags + "View all" CTA.
- Home Emergency section: Multiple design options (4 variants).
- Hospital Cards: Compact, full-width, rating badge, specialties, Call + Directions buttons at bottom. (Awaiting final design approval from 4 HTML options given - Option 1 chosen: Tight Stack).
- Hospital Detail: Hero section with overlapping white card (Option 4 style chosen).
- Hospital Tabs: Sticky header with 3 primary tabs (Overview, Why Choose Us, Services) + "All" button opening a bottom sheet to select from 11 total tabs. Overview tab combines ALL sections.
- Test Listing: Fixed top area (Header, Search, Filters) and scrollable middle content area using `height: '100vh'` and `overflow: 'hidden'` on the page wrapper to prevent bounce.
- Cart: Modern card design, coupon system with dynamic discount logic, fixed checkout bar.
- Orders: Compact Card (Option 1 chosen - Tight Stack with Icon, Date, Order No, Total, Details). Fixed layout like Test page.
- Login/Signup: Unified OTP login flow (Phone -> OTP). No separate signup page. No Google/Apple social login.
- Profile: Inline edit mode. Header matches theme with gradient and overlapping profile card.
- Menu Drawer: Slide-out menu. Triggered from BottomNav.
- Bottom Navigation: Floating pill design. SOS button in center. Menu tab opens drawer.