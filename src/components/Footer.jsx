import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-intro">
            <a href="#home" className="footer-brand">{profile.name}<span aria-hidden="true">.</span></a>
            <p>Building thoughtful web experiences, one project at a time. Always learning, creating, and looking forward to what’s next.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. Made with care and curiosity.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
