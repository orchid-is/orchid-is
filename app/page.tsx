const divisions = [
  {
    number: "01",
    title: "Infinity Solutions",
    text: "Business consulting, import and export support, logistics coordination and practical solutions designed to move ideas forward.",
    link: "Explore Solutions",
  },
  {
    number: "02",
    title: "Infinity Wellness",
    text: "Thoughtful wellness products and experiences created to bring calm, balance and intentional care into everyday life.",
    link: "Discover Wellness",
  },
  {
    number: "03",
    title: "Creative Labs",
    text: "Custom products, 3D printing and creative development that transform meaningful ideas into tangible experiences.",
    link: "Visit Creative Labs",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Orchid Infinity Solutions home">
          <span className="brandMark">O</span>
          <span>
            <strong>ORCHID</strong>
            <small>INFINITY SOLUTIONS</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#divisions">Divisions</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
          <a className="navButton" href="#shop">Shop</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="heroContent">
          <p className="eyebrow">Solutions · Wellness · Creative Innovation</p>
          <h1>
            Meaningful ideas.
            <span>Infinite possibilities.</span>
          </h1>
          <p className="heroText">
            Orchid Infinity Solutions brings business, wellness and creativity together under one elegant vision—building products and services with purpose.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#divisions">Explore Orchid</a>
            <a className="secondaryButton" href="#shop">Visit the Shop</a>
          </div>
        </div>
        <div className="scrollHint">Scroll to discover</div>
      </section>

      <section className="intro" id="divisions">
        <div>
          <p className="eyebrow dark">One vision, three expressions</p>
          <h2>Designed to support how people work, live and create.</h2>
        </div>
        <p>
          Each Orchid division has its own purpose, while sharing the same commitment to quality, thoughtful design and lasting value.
        </p>
      </section>

      <section className="divisionGrid">
        {divisions.map((division) => (
          <article className="divisionCard" key={division.number}>
            <span className="number">{division.number}</span>
            <div>
              <h3>{division.title}</h3>
              <p>{division.text}</p>
              <a href="#contact">{division.link} <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="story" id="story">
        <div className="storyVisual" aria-hidden="true">
          <div className="flower">
            <span /> <span /> <span /> <span /> <i />
          </div>
        </div>
        <div className="storyCopy">
          <p className="eyebrow dark">The meaning behind Orchid</p>
          <h2>A company created from love, legacy and the courage to begin again.</h2>
          <p>
            Orchid honors a mother who loved orchids. Infinity represents enduring love, and Solutions reflects the promise to create practical, beautiful paths forward for people and businesses.
          </p>
          <a href="#contact">Read our story <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="shopSection" id="shop">
        <p className="eyebrow">Coming soon</p>
        <h2>The Orchid Shop</h2>
        <p>Wellness essentials, creative products and meaningful objects—curated and created with intention.</p>
        <a className="lightButton" href="#contact">Join the launch list</a>
      </section>

      <footer id="contact">
        <div className="footerBrand">
          <span className="brandMark light">O</span>
          <div>
            <strong>ORCHID</strong>
            <small>INFINITY SOLUTIONS</small>
          </div>
        </div>
        <div className="footerText">
          <p>Katy, Texas</p>
          <p>Business · Wellness · Creative Labs</p>
        </div>
        <a className="footerContact" href="mailto:hello@orchid-is.com">hello@orchid-is.com</a>
        <div className="copyright">© 2026 Orchid Infinity Solutions LLC. All rights reserved.</div>
      </footer>
    </main>
  );
}
