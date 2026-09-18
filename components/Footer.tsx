"use client";

export default function Footer() {
  return (
    <footer>
      <div className="f-in">
        <div className="f-brand">
          Pilea
          <br />
          Agency<span>2026 © Pilea, tous droits réservés.</span>
        </div>
        <div className="f-links">
          <a href="mailto:jb@pilea.agency">Contact</a>
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
          <a href="#">CGV</a>
          <a href="#">Jobs</a>
        </div>
        <a
          href="#"
          className="f-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ↑
        </a>
      </div>
    </footer>
  );
}
