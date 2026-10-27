import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base = GitHub repo ka naam (GitHub Pages ke liye zaroori)
export default defineConfig({ base: "/My-portfolio/", plugins: [react()] });
