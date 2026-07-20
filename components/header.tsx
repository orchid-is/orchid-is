"use client";

import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

const links = ["About", "Services", "Wellness", "Creative Labs", "Shop", "Blog", "Contact"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Orchid Infinity Solutions home">
        <span className="brand-mark">O</span>
        <span>
          <strong>ORCHID</strong>
          <small>INFINITY SOLUTIONS</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="bag-button" href="#shop" aria-label="Open shop"><ShoppingBag size={18} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)}>{link}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
