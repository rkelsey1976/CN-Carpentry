# CN Carpentry - Color Scheme

## Brand Colors

The website color scheme has been designed to complement the CN Carpentry logo's professional, minimalist aesthetic.

### Primary Colors (Warm Wood Tones)

```
primary-50:  #f5f3f0  (Lightest - backgrounds)
primary-100: #e8e4dd
primary-200: #d1c9bb
primary-300: #b9ad99
primary-400: #a29177
primary-500: #8b7655  ⭐ MAIN BRAND COLOR - Warm wood tone
primary-600: #6f5e44  (Buttons, accents)
primary-700: #534633
primary-800: #372f22
primary-900: #1c1711  (Darkest)
```

### Accent Colors (Charcoal - Matches Logo)

```
accent:      #2c2c2c  (Main charcoal - matches logo lines)
accent-light: #3d3d3d
accent-dark:  #1a1a1a
```

### Neutral Colors (Stone Palette)

The site uses Tailwind's "stone" palette for text and backgrounds:
- Warm grays that complement wood tones
- More natural and earthy than standard grays
- Better match for carpentry/woodworking theme

## Design Philosophy

### Why These Colors?

1. **Professionalism**: Dark charcoal (#2c2c2c) matches the logo's line work
2. **Warmth**: Wood tones (#8b7655) evoke craftsmanship and natural materials
3. **Trust**: Earthy, grounded colors create reliability
4. **Sophistication**: Muted palette avoids aggressive colors

### Color Usage

- **Primary-600** (#6f5e44): All buttons, CTAs, and important accents
- **Accent** (#2c2c2c): Footer, dark sections, professional areas
- **Stone palette**: Text, backgrounds, borders
- **Primary-500** (#8b7655): Star ratings, secondary accents

## Before vs After

### Before (Blue-Purple Gradient)
- Bright, tech-focused
- Generic business feel
- Less connection to carpentry

### After (Wood & Charcoal)
- Warm, professional
- Carpentry-specific aesthetic
- Matches logo perfectly
- More sophisticated and grounded

## Accessibility

✅ All color combinations meet WCAG AA standards
✅ Sufficient contrast ratios for readability
✅ Dark mode support with adjusted tones

## Using the Colors in Code

### Tailwind Classes

```tsx
{/* Primary wood tone */}
<button className="bg-primary-600 hover:bg-primary-700 text-white">

{/* Accent charcoal */}
<section className="bg-accent text-white">

{/* Stone neutrals */}
<p className="text-stone-700 dark:text-stone-300">
```

### CSS Variables

```css
:root {
  --primary: #8b7655;
  --accent: #2c2c2c;
}
```

## Brand Consistency

The color scheme ensures:
- Logo stands out on all backgrounds
- Professional carpentry aesthetic
- Consistent with woodworking trade
- Memorable and distinctive
- Suitable for print materials

## Future Branding

These colors can be used across:
- Business cards
- Vehicle signage
- Work uniforms
- Marketing materials
- Social media graphics

The warm wood tone (#8b7655) and charcoal (#2c2c2c) create a strong, recognizable brand identity for CN Carpentry.
