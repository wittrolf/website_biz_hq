import Reveal from './Reveal';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section id="work" className="section section-border-top portfolio">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Recent work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="portfolio-title">Real work, already live.</h2>
        </Reveal>

        <div className="portfolio-list">
          <Reveal delay={0.1}>
            <a
              href="https://rolfbros.com"
              target="_blank"
              rel="noreferrer"
              className="case"
            >
              <div className="case-media">
                <div className="case-media-inner">
                  <span className="case-media-mark">Rolf Bros.</span>
                </div>
              </div>
              <div className="case-info">
                <div className="case-info-top">
                  <h3>Rolf Bros. Window Washing</h3>
                  <span className="case-arrow">↗</span>
                </div>
                <p className="case-desc">
                  The full website, booking flow, and local ad setup for a
                  window-washing company — built, launched, and running at
                  rolfbros.com.
                </p>
                <div className="case-tags">
                  <span>Full build</span>
                  <span>Local service</span>
                  <span>Live site</span>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="case case-next">
              <div className="case-media case-media-next">
                <span className="case-next-mark">?</span>
              </div>
              <div className="case-info">
                <div className="case-info-top">
                  <h3>Yours, next.</h3>
                </div>
                <p className="case-desc">
                  Before we talk pricing, I'll build a free preview of what
                  your site could look like — designed around your business.
                </p>
                <div className="case-tags">
                  <span>Free preview</span>
                  <span>No obligation</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
