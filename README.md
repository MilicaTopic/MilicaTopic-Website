# Milica Topic Portfolio

Responsive personal portfolio website built with React, Vite, JavaScript, and plain CSS.

## Terminal Commands

These are the commands you would use to create this project from scratch:

```bash
npm create vite@latest portfolio-website -- --template react
cd portfolio-website
npm install
npm run dev
```

This workspace already contains the created files, so from inside `portfolio-website` you only need:

```bash
npm install
npm run dev
```

## Image Placement

Place future image files in:

```text
public/images/
```

Example:

```text
public/images/deutschgenie.jpg
```

## Replacing Project Image Placeholders

Open `src/data/projects.js`. Each project has an `image` value. Replace the empty string with the image path from the `public` folder:

```js
image: "/images/deutschgenie.jpg"
```

The project card will automatically show the image instead of the placeholder.

## Deploying to Vercel

1. Push the project to GitHub.
2. Go to https://vercel.com/new.
3. Import the GitHub repository.
4. Keep the default settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click Deploy.
