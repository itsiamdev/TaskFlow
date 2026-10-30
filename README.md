# TaskFlow

This repository contains a responsive TaskFlow productivity landing page built with React and Vite.

## Description

TaskFlow is presented as a polished productivity concept with a visual task dashboard, feature highlights, testimonials, and an FAQ. The dashboard is a static mockup: it does not provide authentication, persistent task management, or other application logic.

The page is a frontend concept with a visual task dashboard. It does not provide authentication, persistent task management, or other application logic.

## Project structure

- `index.html` - Vite entry page and document metadata
- `src/App.jsx` - assembles the page from its components
- `src/components/` - reusable page sections, including the header, hero, feature sections, FAQ, and footer
- `src/pages/` - the privacy policy, terms, help center, documentation, blog, and getting started pages
- `/privacy-policy` and `/terms-of-service` - routes for the legal information pages
- `/help-center` and `/documentation` - product help and demo documentation pages
- `/get-started` - introduction page linked from the Get started buttons
- `/blog` - TaskFlow articles linked from the header
- `src/main.jsx` - React application entry point
- `src/styles.css` - responsive styling and animations
- `vite.config.js` - Vite React plugin configuration

## Usage

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or preview it locally with `npm run preview`.

The page loads its fonts from Google Fonts when an internet connection is available and uses system font fallbacks otherwise.
Vercel uses `vercel.json` to serve the React entry page for direct visits to client-side routes such as `/get-started`.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
