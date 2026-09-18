"use client";

export default function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="nav-wrap">
      <nav className="nav-pill">
        <div className="nav-left">
          <a href="#methode">Méthode</a>
          <a href="#tarif">Tarif</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#" className="nav-logo">
          Pilea Agency
        </a>
        <a
          href="#cta"
          className="nav-btn"
          onClick={(e) => {
            e.preventDefault();
            onOpenModal();
          }}
        >
          Prendre rendez-vous
        </a>
      </nav>
    </header>
  );
}
