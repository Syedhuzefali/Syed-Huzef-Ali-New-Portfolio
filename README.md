# Syed Huzef Ali — Portfolio

A single-page, frontend-only portfolio built with React 19 and Vite. It features smooth section navigation, responsive design, and dark/light themes.

## Prerequisites

* Node.js (LTS version)
* npm
* Git
* Visual Studio Code (recommended)

Check your Node.js and npm installation:

```bash
node -v
npm -v
```

## Getting Started

1. Open a terminal in the project directory.

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

Changes to the source code will automatically update the development page.

## Project Structure

* `index.html` — Page title, SEO description, and font loading.
* `vite.config.js` — Vite configuration, including the deployment base path.
* `src/main.jsx` — Mounts the React application.
* `src/App.jsx` — Organizes the portfolio sections.
* `src/data/portfolio.js` — Portfolio content, including skills, projects, experience, and education.
* `src/components/` — Reusable components for navigation, hero, about, skills, projects, experience, education, certificates, contact, and footer.
* `src/components/Section.jsx` — Shared section wrapper.
* `src/components/Timeline.jsx` — Timeline component for experience and education.
* `src/hooks/useActiveSection.js` — Highlights the active navigation section while scrolling.
* `src/index.css` — Styling, responsive layouts, colors, typography, and themes.

## Customizing the Portfolio

1. Edit `src/data/portfolio.js` to update your portfolio information.
2. Add the correct live demo and source-code links for your projects.
3. Place your resume PDF at `public/Syed-Huzef-Ali-Resume.pdf` if the application expects that filename.
4. Keep experience, qualifications, and achievements accurate and up to date.

## Features

* Smooth scrolling between sections.
* Active navigation section highlighting.
* Responsive layout.
* Dark and light themes.
* Contact links for email, LinkedIn, and GitHub.

## Deployment

This project can be deployed using GitHub Pages or another hosting service.

For GitHub Pages:

1. Configure the correct `base` path in `vite.config.js` for the repository.
2. Run the deployment command configured in your project's `package.json`, if available.
3. Configure GitHub Pages under your repository's **Settings → Pages**.
4. Open the published URL shown in the repository's Pages settings.

**Note:** The deployment URL and commands depend on your repository configuration. Verify them before publishing.

## License

Add a license if you intend to distribute or reuse this project under specific terms.
