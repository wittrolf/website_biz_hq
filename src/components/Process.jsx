import Reveal from './Reveal';
import './Process.css';

const STEPS = [
  {
    n: '01',
    title: 'I find you',
    desc: "I look for Utah businesses without a site, or with one that's overdue for an update.",
  },
  {
    n: '02',
    title: 'I build a free concept',
    desc: 'Before any conversation about money, I design and build a real, working version of your new site.',
  },
  {
    n: '03',
    title: 'You see it live',
    desc: 'No mockup, no PDF — a real link you can open on your phone and click through.',
  },
  {
    n: '04',
    title: 'We launch it',
    desc: "If you like it, we get it live on your own domain. If you don't, no hard feelings.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section section-border-top process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">How it works</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="process-title">You see it before you pay for it.</h2>
        </Reveal>

        <div className="process-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.1 + i * 0.08} className="process-step">
              <span className="process-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
