"use client";

const LOGOS = [
  { cls: "ls-script", text: "CapCut" },
  { cls: "ls-bold", text: "Premiere Pro" },
  { cls: "ls-logo", text: "✣ AFTER EFFECTS" },
  { cls: "ls-logo", text: "▦ Canva" },
  { cls: "ls-logo", text: "_CHATGPT_" },
  { cls: "ls-logo", text: "◍ YOUTUBE" },
  { cls: "ls-logo", text: "INSTAGRAM" },
];

const FACES = [
  { img: "https://i.pravatar.cc/40?img=59", name: "Podcast Editing", subs: "Long-form focus" },
  { img: "https://i.pravatar.cc/40?img=15", name: "Video Editing", subs: "3+ years of craft" },
  { img: "https://i.pravatar.cc/40?img=53", name: "Team Lead", subs: "Creative ownership" },
  { img: "https://i.pravatar.cc/40?img=8", name: "Content Analyst", subs: "Where it started" },
  { img: "https://i.pravatar.cc/40?img=11", name: "Motion Design", subs: "Now learning" },
  { img: "https://i.pravatar.cc/40?img=3", name: "AI Workflows", subs: "Faster systems" },
];

const COMMENTS = [
  { time: "03:12", text: "Love this transition!" },
  { time: "06:54", text: "Can we add captions to the subtitles here?" },
  { time: "02:06", text: <>The first half is perfect.<br />Approved</> },
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
        I find the story
        <br />
        <em>inside raw material.</em>
      </h1>
      <p className="hero-sub" data-plx="0.3">
        Video Editor · Podcast Editor · Content Creator — 3+ years of long-form
        &amp; short-form.
      </p>
      <div className="hero-cta" data-plx="0.32">
        <a href="#cta" className="cta-white" onClick={open}>
          Book a call
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
                  <span className="fc-name">KPH Podcast</span>
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
            alt="Podcast studio — edit in progress"
          />
          <div className="hv-shade" />
          <div className="hv-cap left">
            <b>Long-form</b>
            <em>episodes</em>
          </div>
          <div className="hv-cap right">
            <b>Short-form</b>
            <em>
              <small>&</small> clips
            </em>
          </div>
          <button className="hv-play" aria-label="Play the video">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        {/* right top: Informations */}
        <div className="float-card fc-info" data-plx="0.12">
          <div className="fc-head">
            <span className="fc-i">ⓘ</span> Information
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
          <div className="ff-name">KPH_Podcast_VFINAL.mp4</div>
          <div className="ff-author">
            Abhishek.D&nbsp;&nbsp;•&nbsp;&nbsp;Podcast edit
          </div>
          <div className="ff-sec">
            <span className="ff-label">⚑ Video status</span>
            <span className="ff-pill">Ready to publish</span>
          </div>
          <div className="ff-sec">
            <span className="ff-label">🖥 Publishing platforms</span>
            <div className="fc-plats">
              <i>◉ LinkedIn</i>
              <i>▶ Youtube</i>
              <i>◍ Instagram</i>
              <i>♪ TikTok</i>
              <i>f Facebook</i>
            </div>
          </div>
          <div className="ff-foot">
            <span>Final cut</span>
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
