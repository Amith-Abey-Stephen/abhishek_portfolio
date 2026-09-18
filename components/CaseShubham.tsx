"use client";

export default function CaseShubham({
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
          Ce qui a permis à<br />
          <em>Shubham Sharma.</em>
        </h2>
        <a className="dark-pill" href="#cta" onClick={open}>
          Voir la vidéo
        </a>
      </div>
      <div className="case-hero">
        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop"
          alt=""
        />
        <div className="case-tags">
          <span>Youtubeur</span>
          <span>Créateur de contenu</span>
          <span>180 000 abonnés</span>
        </div>
      </div>
      <div className="case-split">
        <div>De publier une des vidéos</div>
        <div>Les plus vue de sa chaîne</div>
      </div>
      <div className="invoice">
        <div className="inv-row">
          <span>Total HT</span>
          <b>860 €</b>
        </div>
        <div className="inv-row">
          <span>Total TTC</span>
          <b>1032 €</b>
        </div>
        <div className="inv-grid">
          <div>
            👥 +5 000 abonnés
            <br />
            <small>en une vidéo</small>
          </div>
          <div>
            👁 32 500 h. de watchtime
            <br />
            <small>4 300 h. en moyenne</small>
          </div>
          <div>
            ▶ 1 / 10 classement
            <br />
            <small>par vue Youtube</small>
          </div>
        </div>
      </div>
      <div className="testi">
        <div className="t-ava">
          <img src="https://i.pravatar.cc/200?img=60" alt="" />
          <span className="t-play">▶</span>
        </div>
        <div className="t-name">Shubam Sharma</div>
        <p className="t-quote">
          &quot;JB et son équipe, franchement sont des experts.
          <br />
          Ils savent exactement comment fonctionne Youtube !&quot;
        </p>
        <a href="#cta" className="cta-white" onClick={open}>
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
