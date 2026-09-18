"use client";

export default function CaseFanny({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenModal();
  };
  return (
    <section className="case">
      <div className="case-top">
        <h2 className="sec-h left">
          Ou encore d&apos;aider
          <br />
          <em>Fanny Nusbaum.</em>
        </h2>
        <a className="dark-pill" href="#cta" onClick={open}>
          Voir les vidéos
        </a>
      </div>
      <div className="case-stack">
        <img
          className="s1"
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
          alt=""
        />
        <img
          className="s2"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
          alt=""
        />
        <img
          className="s3"
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />
        <div className="case-tags">
          <span>Entrepreneuse</span>
          <span>Docteur</span>
          <span>Autrice</span>
        </div>
      </div>
      <div className="case-split">
        <div>À créer son personal branding</div>
        <div>De A à Z sur un sujet de niche</div>
      </div>
      <div className="testi">
        <div className="t-ava">
          <img src="https://i.pravatar.cc/200?img=44" alt="" />
        </div>
        <div className="t-name">Fanny Nusbaum</div>
        <p className="t-quote">
          &quot;Ils sont sympas, fiables, très carrés et en plus ultra
          créatifs.&quot;
        </p>
        <a href="#cta" className="cta-white" onClick={open}>
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
