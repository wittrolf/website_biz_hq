import Reveal from './Reveal';
import './Services.css';

const SERVICES = [
  {
    name: 'New site build',
    desc: "Don't have a website yet? I design and build one from scratch, tailored to your business.",
  },
  {
    name: 'Redesign',
    desc: 'Have a site that\'s outdated or hard to use? I rebuild it to look and work like it should.',
  },
  {
    name: 'Website care',
    desc: 'Once it\'s live, email me when you need something changed. I\'ll take it from there.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-border-top services">
      <div className="container services-grid">
        <div>
          <Reveal>
            <p className="eyebrow">What I do</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="services-title">Simple, on purpose.</h2>
          </Reveal>
        </div>
        <div className="services-list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.1 + i * 0.08}>
              <div className="service-row">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
