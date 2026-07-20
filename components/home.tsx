"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Package, Sparkles } from "lucide-react";
import { Header } from "./header";

const divisions = [
  {
    icon: Package,
    eyebrow: "Global Business",
    title: "Orchid Infinity Solutions",
    copy: "Strategic sourcing, import and export support, logistics coordination, consulting, and practical solutions built around your goals.",
    href: "#services",
  },
  {
    icon: Leaf,
    eyebrow: "Everyday Wellbeing",
    title: "Orchid Infinity Wellness",
    copy: "Thoughtfully selected wellness, aromatherapy, and lifestyle products for people, homes, and pets.",
    href: "#wellness",
  },
  {
    icon: Sparkles,
    eyebrow: "Made With Imagination",
    title: "Orchid Creative Labs",
    copy: "Personalized products, 3D-printed creations, brand experiences, and meaningful objects designed to be remembered.",
    href: "#creative-labs",
  },
];

export function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <Header />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="eyebrow">Purpose • Elegance • Possibility</p>
          <h1>Beautiful ideas.<br /><em>Infinite solutions.</em></h1>
          <p className="hero-copy">
            A modern company bringing together business solutions, wellness, and creative products under one meaningful brand.
          </p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#discover">Explore Orchid <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#shop">Visit the Shop</a>
          </div>
        </motion.div>

        <div className="hero-note">
          <span>Founded with love. Built for the future.</span>
          <span className="hero-note-line" />
        </div>
      </section>

      <section className="intro section" id="discover">
        <div className="section-label">One brand. Three expressions.</div>
        <div className="intro-grid">
          <h2>Where purpose becomes something real.</h2>
          <p>
            Orchid Infinity Solutions was created to connect intelligent services, thoughtful wellbeing, and inspired design. Every division shares the same commitment: creating value with care, beauty, and intention.
          </p>
        </div>
      </section>

      <section className="division-section section" id="services">
        {divisions.map((division, index) => {
          const Icon = division.icon;
          return (
            <motion.article
              className="division-card"
              key={division.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="division-icon"><Icon size={22} /></div>
              <p className="eyebrow">{division.eyebrow}</p>
              <h3>{division.title}</h3>
              <p>{division.copy}</p>
              <a href={division.href}>Discover more <ArrowRight size={16} /></a>
            </motion.article>
          );
        })}
      </section>

      <section className="story section" id="about">
        <div className="story-visual" aria-hidden="true">
          <div className="flower flower-one" />
          <div className="flower flower-two" />
          <span className="infinity">∞</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Our Story</p>
          <h2>A name rooted in love. A vision without limits.</h2>
          <p>
            Orchid honors a mother who loved orchids. Infinity represents enduring love. Solutions reflects the desire to create useful, thoughtful, and lasting possibilities for others.
          </p>
          <a className="text-link" href="#contact">Read our story <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="shop-preview section" id="shop">
        <div>
          <p className="eyebrow">Coming Soon</p>
          <h2>The Orchid Shop</h2>
        </div>
        <p>A curated collection of wellness products, creative objects, personalized gifts, and meaningful everyday essentials.</p>
        <a className="button button-dark" href="#contact">Join the launch list <ArrowRight size={17} /></a>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <span className="brand-mark">O</span>
          <div><strong>ORCHID</strong><small>INFINITY SOLUTIONS</small></div>
        </div>
        <p>Solutions for business, wellbeing, and inspired living.</p>
        <div className="footer-links">
          <a href="mailto:hello@orchid-is.com">hello@orchid-is.com</a>
          <a href="#top">Back to top</a>
        </div>
        <small>© 2026 Orchid Infinity Solutions LLC. All rights reserved.</small>
      </footer>
    </main>
  );
}
