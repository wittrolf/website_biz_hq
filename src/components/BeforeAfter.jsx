import { useRef, useState, useCallback, useEffect } from 'react';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const trackRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, [setFromClientX]);

  return (
    <div className="ba-wrap">
      <div className="ba-track" ref={trackRef}>
        {/* AFTER (base layer, full) — real text, photo-like cards */}
        <div className="ba-panel ba-after">
          <div className="ba-tag ba-tag-after">After</div>
          <div className="mock mock-after">
            <div className="mock-nav">
              <span className="mock-logo">Evergreen&nbsp;Co.</span>
              <span className="mock-navlinks">
                <span>Services</span>
                <span>Work</span>
                <span>Contact</span>
              </span>
            </div>

            <div className="mock-hero">
              <h4>Landscaping that speaks<br />for itself.</h4>
              <p>Serving local homeowners since 2014.</p>
              <span className="mock-cta">Get a quote →</span>
            </div>

            <div className="mock-gallery">
              <div className="mock-shot mock-shot-lawn" />
              <div className="mock-shot mock-shot-stone" />
              <div className="mock-shot mock-shot-wide" />
            </div>

            <div className="mock-strip">
              <div className="mock-stars">★★★★★</div>
              <span className="mock-review-text">"Best crew we've ever hired." — J. Mendez</span>
            </div>
          </div>
        </div>

        {/* BEFORE (clipped layer, revealed by slider) — dated, cluttered, real text */}
        <div className="ba-panel ba-before" style={{ width: `${pos}%` }}>
          <div className="ba-tag ba-tag-before">Before</div>
          <div className="mock mock-before">
            <div className="mock-nav-before">
              <span className="mock-before-title">🌳 Evergreen Lawn & Landscape 🌳</span>
            </div>

            <div className="mock-marquee">
              <span className="mock-marquee-text">★ CALL NOW FOR FREE QUOTE ★ SE HABLA ESPANOL ★ EST. 2003 ★</span>
            </div>

            <p className="mock-before-copy">
              Welcome to our website!! We do lawn care, tree trimming,
              sprinklers and MORE. Call us today for a FREE estimate!!
            </p>

            <div className="mock-before-photo" />

            <ul className="mock-before-list">
              <li>✔ Licensed &amp; Insured</li>
              <li>✔ Family Owned Since 2003</li>
              <li>✔ Se Habla Espanol</li>
            </ul>

            <div className="mock-counter">Visitors: 004,271</div>
          </div>
        </div>

        {/* Handle */}
        <div
          className="ba-handle"
          style={{ left: `${pos}%` }}
          onMouseDown={() => { dragging.current = true; }}
          onTouchStart={() => { dragging.current = true; }}
          role="slider"
          aria-label="Compare before and after website"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4));
            if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4));
          }}
        >
          <div className="ba-handle-line" />
          <div className="ba-handle-grip">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>
      <p className="ba-caption">Drag to compare</p>
    </div>
  );
}
