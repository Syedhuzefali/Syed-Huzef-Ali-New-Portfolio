# Huzef Portfolio (React 19 + Vite)

Single-page, frontend-only portfolio. Navbar click par page us section tak smooth scroll hota hai.

## Step 1: Tools install
1. Node.js LTS install karo (nodejs.org), phir `node -v` se check karo.
2. VS Code aur Git pehle se hone chahiye.

## Step 2: Project chalana
```
cd huzef-portfolio
npm install
npm run dev
```
Browser me `http://localhost:5173/My-portfolio/` kholo. Code save karte hi page apne aap update hoga.

## Step 3: Folder ka matlab
- `index.html`: page title, SEO description, Google Fonts
- `vite.config.js`: `base` = tumhare GitHub repo ka naam (GitHub Pages ke liye)
- `src/main.jsx`: React app ko page par lagata hai
- `src/App.jsx`: saare sections ko ek ke neeche ek rakhta hai
- `src/data/portfolio.js`: **tumhara poora content** (naam, skills, projects, experience, education)
- `src/components/*.jsx`: har section ki apni file (Navbar, Hero, About, Skills, Projects, Experience, Education, Certificates, Contact, Footer)
- `src/components/Section.jsx`: har section ka common wrapper (id + heading)
- `src/components/Timeline.jsx`: Experience aur Education dono ke liye
- `src/hooks/useActiveSection.js`: scroll karte waqt navbar me current section highlight karta hai
- `src/index.css`: poora design (colors, fonts, responsive, dark/light themes)

## Step 4: Scroll kaise kaam karta hai
Har section ka `id` hai (`about`, `skills`...). Navbar ke links `href="#about"` jaise hain, aur `index.css` me `scroll-behavior: smooth` hai, isliye click par page khud scroll hota hai. `scroll-padding-top` sticky navbar ke neeche section ko chhupne se bachata hai.

## Step 5: Apna content daalo
1. `src/data/portfolio.js` kholo aur text apne hisaab se badlo.
2. IMS project me `live` (Vercel link) aur `code` (GitHub link) paste karo.
3. Resume PDF ko `public/Syed-Huzef-Ali-Resume.pdf` naam se rakho.
4. Experience me sirf sach likho. Naya kaam ya internship mile to list me upar add karo.

## Step 6: Contact
Visitors can email you directly or open your LinkedIn and GitHub profiles from the Contact section.

## Step 7: GitHub Pages par deploy
1. Is project ko apni repo `My-portfolio` me daalo (purana code hata kar).
2. `npm run deploy` (build karke `gh-pages` branch par bhejta hai).
3. GitHub repo > Settings > Pages > Branch: `gh-pages` select karo.
4. Site: https://syedhuzefali.github.io/My-portfolio/

## Step 8: Aage kya badal sakte ho
Colors `index.css` ke `:root` aur `[data-theme="dark"]` me hain. Theme toggle visitor ki pasand browser me save karta hai. Projects are listed in `src/data/portfolio.js`; add future projects there. Add certificates and achievements to the Certificates section when ready. Naya section chahiye to `components/` me nayi `.jsx` file banao, `App.jsx` me lagao aur `navItems` me ek entry add karo.
