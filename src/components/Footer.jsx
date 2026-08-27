import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="nav-mark">Studio<span>.</span></span>
        <span className="footer-note">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
