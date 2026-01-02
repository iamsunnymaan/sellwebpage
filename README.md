# LITHOS - Luxury Stone Sculptures Website

## Running the Website

✅ **FIXED!** This website now works **WITHOUT** needing a local server! Simply open `index.html` directly in your browser.

The product data is now embedded in `products.js` instead of being loaded via fetch, so there are no CORS restrictions.

## Quick Start

**Option 1: Direct File Opening (Recommended)**
Just double-click `index.html` - it works immediately!

**Option 2: Using a Local Server (Optional)**
If you prefer to run a local server:

- **Python**: `python -m http.server 8000` → http://localhost:8000
- **VS Code Live Server**: Right-click `index.html` → "Open with Live Server"
- **Node.js**: `npx serve` → Follow terminal URL
- **PHP**: `php -S localhost:8000` → http://localhost:8000

## Features

- ✨ Featured Products Carousel (works offline!)
- 🎨 Gallery with Advanced Filtering
- 📦 Product Categories (Le Luxe, Surface, Temple, Sculptures)
- 🤝 B2B Section
- 🏭 Infrastructure Showcase
- 📞 Contact Modal with Multiple Contact Methods
- 📱 Fully Responsive Design

## Technical Notes

- Products are now stored in `products.js` as a JavaScript object
- No external API calls required
- Works completely offline
- All 104 products load instantly
