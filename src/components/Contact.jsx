import { useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const [message, setMessage] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const body = encodeURIComponent(message.trim());
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message")}&body=${body}`;
  }

  return (
    <Section id="contact" title="Contact">
      <div className="contact-layout">
        <div className="contact-card">
          <p className="contact-kicker">GET IN TOUCH</p>
          <h3>Let’s talk about what’s next.</h3>
          <p className="contact-note">Eager to kickstart my career in web development and connect with builders, creators, and tech enthusiasts who love crafting great web experiences.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
          <a className="contact-email" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}<span aria-hidden="true">↗</span></a>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="contact-message">Send me a note</label>
          <p className="contact-form-note">Write your message below and I’ll be glad to hear from you.</p>
          <textarea
            id="contact-message"
            name="message"
            rows="7"
            placeholder="Hi Huzef, I wanted to get in touch about..."
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <div className="contact-form-footer">
            <span className="contact-hint">Opens your email app to send.</span>
            <button className="btn primary" type="submit">Send message <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      </div>
    </Section>
  );
}
