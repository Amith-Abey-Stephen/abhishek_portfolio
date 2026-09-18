"use client";

export default function Footer() {
  return (
    <footer>
      <div className="f-in">
        <div className="f-brand">
          Abhishek
          <br />
          .D<span>2026 © Abhishek.D, all rights reserved.</span>
        </div>
        <div className="f-links">
          <a href="#cta">Contact</a>
          <a href="#methode">Journey</a>
          <a href="#tarif">Toolkit</a>
          <a href="#faq">FAQ</a>
          <a href="#hero">Top</a>
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
