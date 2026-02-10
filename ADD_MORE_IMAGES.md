# How to Add More Carpentry Project Images

## Quick Guide

### Step 1: Save Your Images
1. Download/save your carpentry project images
2. Place them in the `public` folder
3. Use simple names like: `project-2.jpg`, `project-3.jpg`, etc.

### Step 2: Update the Portfolio Section

Open `app/page.tsx` and find the Portfolio section (around line 165).

#### Current Structure:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* First card - Your media wall image */}
  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
    <Image
      src="/carpentry-work-1.png"
      alt="Custom Built-in Media Wall"
      fill
      className="object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
      <div>
        <h3 className="text-white font-bold text-xl mb-2">Custom Media Wall</h3>
        <p className="text-slate-300 text-sm">Built-in unit with integrated lighting</p>
      </div>
    </div>
  </div>

  {/* Instagram card */}
  {/* Other cards... */}
</div>
```

#### Add a New Project Card:
Copy the structure above and modify for your new image:

```tsx
<div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
  <Image
    src="/project-2.jpg"
    alt="Fitted Wardrobe"
    fill
    className="object-cover group-hover:scale-110 transition duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
    <div>
      <h3 className="text-white font-bold text-xl mb-2">Fitted Wardrobe</h3>
      <p className="text-slate-300 text-sm">Made-to-measure bedroom storage</p>
    </div>
  </div>
</div>
```

### Step 3: Adjust Grid Layout

If you have many images, update the grid:

```tsx
{/* For 4 columns on large screens: */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* For 3 columns (current): */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## Example: Adding 5 More Projects

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Your existing media wall */}
  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
    <Image src="/carpentry-work-1.png" alt="Custom Built-in Media Wall" fill className="object-cover group-hover:scale-110 transition duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
      <div>
        <h3 className="text-white font-bold text-xl mb-2">Custom Media Wall</h3>
        <p className="text-slate-300 text-sm">Built-in unit with integrated lighting</p>
      </div>
    </div>
  </div>

  {/* New Project 2 */}
  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
    <Image src="/wardrobe-project.jpg" alt="Fitted Wardrobe" fill className="object-cover group-hover:scale-110 transition duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
      <div>
        <h3 className="text-white font-bold text-xl mb-2">Fitted Wardrobe</h3>
        <p className="text-slate-300 text-sm">Bespoke bedroom storage solution</p>
      </div>
    </div>
  </div>

  {/* New Project 3 */}
  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
    <Image src="/kitchen-project.jpg" alt="Kitchen Installation" fill className="object-cover group-hover:scale-110 transition duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
      <div>
        <h3 className="text-white font-bold text-xl mb-2">Kitchen Installation</h3>
        <p className="text-slate-300 text-sm">Complete kitchen fitting</p>
      </div>
    </div>
  </div>

  {/* Continue with more projects... */}
  
  {/* Keep the Instagram card at the end */}
  <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
    <div className="text-center p-8">
      <p className="text-slate-300 text-lg mb-4">Visit our Instagram</p>
      <a href="https://www.instagram.com/cn_carpentry" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition">
        @cn_carpentry
      </a>
    </div>
  </div>
</div>
```

## Image Best Practices

### Image Specifications
- **Format**: JPG or PNG
- **Size**: Maximum 2MB per image
- **Dimensions**: At least 800x600px (higher resolution is better)
- **Aspect Ratio**: 4:3 or 16:9 works best

### Photography Tips
1. Good lighting is essential
2. Clean, finished installations photograph best
3. Multiple angles of the same project
4. Before/after shots work great
5. Detail shots showing craftsmanship

## Need Help?

If you need assistance adding more images, the basic pattern is:
1. Save image in `public` folder
2. Copy an existing card structure
3. Change the image path, title, and description
4. Save and refresh your browser

The website will automatically reload and show your new images!
