import Reveal from './Reveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section section-border-top about">
      <div className="container about-grid">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>
        <div className="about-content">
          <Reveal delay={0.05}>
            <h2>
              I run a small window-washing business with my brother. I know
              what it's like to need customers to find you — and to not have
              time to fuss with a website while you're out doing the actual work.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              That's the whole reason this exists: to build sites for people
              running real, local, hands-on businesses across Utah — without
              you having to figure out any of the technical side yourself.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
