"use client";

const LOGOS = [
  { cls: "ls-script", text: "Blooming YOU" },
  { cls: "ls-bold", text: "Papisy" },
  { cls: "ls-logo", text: "✣ STELLO" },
  { cls: "ls-logo", text: "▦ Querimont" },
  { cls: "ls-logo", text: "_UNDERSCORE_" },
  { cls: "ls-logo", text: "◍ PASSIAMAN" },
  { cls: "ls-logo", text: "LINAGORA" },
];

const FACES = [
  { img: "https://i.pravatar.cc/40?img=59", name: "Miccode", subs: "+1.4M abonnés" },
  { img: "https://i.pravatar.cc/40?img=15", name: "Matthias Frank", subs: "+14k abonnés" },
  { img: "https://i.pravatar.cc/40?img=53", name: "Wakz", subs: "+132k abonnés" },
  { img: "https://i.pravatar.cc/40?img=8", name: "Better Creating", subs: "+157k abonnés" },
  { img: "https://i.pravatar.cc/40?img=11", name: "Matthieu Stephani", subs: "+41k abonnés" },
  { img: "https://i.pravatar.cc/40?img=3", name: "Alexandre Calvez", subs: "+1.2M abonnés" },
];

const COMMENTS = [
  { time: "03:12", text: "J'aime beaucoup cette transition !" },
  { time: "06:54", text: "Possible d'ajouter des émojis sur les sous-titres ?" },
  { time: "02:06", text: <>La première partie est parfaite !<br />C&apos;est validé</> },
];

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenModal();
  };
  return (
    <section className="hero" id="hero">
      <div className="guides">
        <i className="gl" />
        <i className="gr" />
      </div>
      <h1 className="hero-h1" data-plx="0.25">
        On crée vos
        <br />
        <em>contenus vidéo.</em>
      </h1>
      <p className="hero-sub" data-plx="0.3">
        Tout inclus, prix fixes &amp; retours illimités.
      </p>
      <div className="hero-cta" data-plx="0.32">
        <a href="#cta" className="cta-white" onClick={open}>
          Prendre rendez-vous
        </a>
      </div>

      <div className="hero-stage" data-plx="0.02">
        <div className="hero-hline top" />
        {/* left Frame.io comments */}
        <div className="float-card fc-left" data-plx="-0.08">
          {COMMENTS.map((c, i) => (
            <div key={c.time}>
              {i > 0 && <div className="fc-sep" />}
              <div className="fc-row">
                <div className="fc-id">
                  <span className="fc-globe">🌐</span>
                  <span className="fc-name">Acme Labs</span>
                </div>
                <div className="fc-time">{c.time}</div>
                <div className="fc-txt">{c.text}</div>
                <div className="fc-reply">
                  Reply&nbsp;&nbsp;👍
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* center video */}
        <div className="hero-video" onClick={open}>
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1800&auto=format&fit=crop"
            alt="Studio Pilea — Jean-Baptiste face caméra"
          />
          <div className="hv-shade" />
          <div className="hv-cap left">
            <b>Montage</b>
            <em>vidéo</em>
          </div>
          <div className="hv-cap right">
            <b>Création</b>
            <em>
              <small>de</small> contenu
            </em>
          </div>
          <button className="hv-play" aria-label="Lire la vidéo">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        {/* right top: Informations */}
        <div className="float-card fc-info" data-plx="0.12">
          <div className="fc-head">
            <span className="fc-i">ⓘ</span> Informations
          </div>
          <div className="fc-badges">
            <span>◷ 1:10</span>
            <span>⤓ 9MB</span>
            <span>❐ 1920x1080</span>
            <span>≡ MPEG4, H.264</span>
          </div>
        </div>
        {/* right bottom: file card */}
        <div className="float-card fc-file" data-plx="-0.1">
          <div className="ff-name">AcmeLabs_023_VDEF.mp4</div>
          <div className="ff-author">
            Jean-Baptiste Rogé&nbsp;&nbsp;•&nbsp;&nbsp;18 sept. 2026
          </div>
          <div className="ff-sec">
            <span className="ff-label">⚑ État de la vidéo</span>
            <span className="ff-pill">Prêt à être publié</span>
          </div>
          <div className="ff-sec">
            <span className="ff-label">🖥 Plateforme de publication</span>
            <div className="fc-plats">
              <i>◉ LinkedIn</i>
              <i>▶ Youtube</i>
              <i>◍ Instagram</i>
              <i>♪ TikTok</i>
              <i>f Facebook</i>
            </div>
          </div>
          <div className="ff-foot">
            <span>Édition finale</span>
            <b className="check">✓</b>
          </div>
        </div>
        <div className="hero-hline bottom" />
      </div>

      {/* logo strip directly under video */}
      <div className="logo-strip" aria-hidden="true">
        <div className="ls-track">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span key={i} className={l.cls}>
              {l.text}
            </span>
          ))}
        </div>
      </div>
      <div className="face-strip" aria-hidden="true">
        <div className="fs-track">
          {[...FACES, ...FACES].map((f, i) => (
            <span key={i} className="fs-pill">
              <img src={f.img} alt="" />
              <span>
                <b>{f.name}</b>
                <small>{f.subs}</small>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
