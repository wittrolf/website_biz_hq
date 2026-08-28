import { useState } from 'react';
import Reveal from './Reveal';
import './Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mljerbav';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section-border-top contact">
      <div className="container contact-grid">
        <div>
          <Reveal>
            <p className="eyebrow">Get started</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="contact-title">
              Let's see what your site could look like.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="contact-sub">
              Tell me about your business and I'll follow up — no cost, no
              obligation, just a real preview for you to look at.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {status === 'sent' ? (
            <div className="contact-success">
              <p>Got it — I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Business name
                <input type="text" name="business" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                What are you looking for?
                <textarea name="message" rows={4} />
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send it'}
              </button>
              {status === 'error' && (
                <p className="contact-error">
                  Something went wrong — mind trying again in a moment?
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
