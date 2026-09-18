"use client";

export default function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="nav-wrap">
      <nav className="nav-pill">
        <div className="nav-left">
          <a href="#methode">Journey</a>
          <a href="#tarif">Toolkit</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#" className="nav-logo">
          Abhishek.D
        </a>
        <a
          href="#cta"
          className="nav-btn"
          onClick={(e) => {
            e.preventDefault();
            onOpenModal();
          }}
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
