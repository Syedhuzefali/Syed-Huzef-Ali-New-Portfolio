import { useEffect, useRef, useState } from "react";
import { profile, navItems } from "../data/portfolio.js";
import useActiveSection from "../hooks/useActiveSection.js";

const ids = navItems.map((n) => n.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return undefined;

    function closeOnEscape(event) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark" aria-hidden="true">HA</span>
          {profile.name}
        </a>
        <div className="nav-controls">
          <nav id="menu" className={open ? "open" : ""} aria-label="Main navigation">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="theme-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          </button>
          <button
            className="menu-btn"
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
