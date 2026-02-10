# CN Carpentry Website

A modern, professional website for CN Carpentry - showcasing bespoke carpentry and joinery services.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚛️ TypeScript for type safety
- 🎯 Modern UI/UX with smooth animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
cam/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## Customization

### Adding Your Business Logo

The website is currently using a placeholder logo. To add your actual CN Carpentry logo:

1. Save your logo image in the `public` folder (e.g., `logo.png`)
2. Open `app/page.tsx` and find the navigation section (around line 17)
3. Replace the placeholder div with:
```tsx
<Image
  src="/logo.png"
  alt="CN Carpentry Logo"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

### Customizing Content

The website is pre-configured for CN Carpentry with:
- ✅ Carpentry-specific services
- ✅ Portfolio section with your work
- ✅ Instagram integration (@cn_carpentry)
- ✅ Professional contact form
- ✅ Client testimonials

To add more portfolio images:
1. Add images to the `public` folder
2. Update the portfolio section in `app/page.tsx`

### Styling

The website uses Tailwind CSS. You can customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!
