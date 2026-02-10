# Adding Your Logo to the Website

## Step 1: Save Your Logo

1. Download your logo from: https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/628427068_122188433654382536_8434086272343940362_n.jpg...
2. Save it to the `public` folder with a simple name like `logo.png` or `logo.jpg`

## Step 2: Update the Navigation Logo

Open `app/page.tsx` and find the navigation section (around line 17):

### Current placeholder:
```tsx
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-xl">C</span>
</div>
```

### Replace with your actual logo:
```tsx
<Image
  src="/logo.png"
  alt="CAM Business Logo"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

Make sure to add the Image import at the top of the file (it's already there):
```tsx
import Image from "next/image";
```

## Step 3: Update Company Name

If your business name is different from "CAM Business", search and replace throughout the file.

## Step 4: Customize Colors

The website uses a blue-to-purple gradient theme. To change colors:

Edit `tailwind.config.ts` to add your brand colors:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
    },
  },
},
```

Then use these colors in your components: `bg-primary`, `text-primary`, etc.
