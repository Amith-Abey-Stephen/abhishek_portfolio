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
          The current chapter:
          <br />
          <em>the KPH Podcast.</em>
        </h2>
        <a className="dark-pill" href="#cta" onClick={open}>
          Work with me
        </a>
      </div>
      <div className="case-hero">
        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop"
          alt=""
        />
        <div className="case-tags">
          <span>Podcast</span>
          <span>Long-form + Shorts</span>
          <span>Weekly pipeline</span>
        </div>
      </div>
      <div className="case-split">
        <div>One long conversation</div>
        <div>Every platform fed</div>
      </div>
      <div className="invoice">
        <div className="inv-row">
          <span>Input</span>
          <b>Raw podcast recording</b>
        </div>
        <div className="inv-row">
          <span>Output</span>
          <b>Episode + clips, published</b>
        </div>
        <div className="inv-grid">
          <div>
            🎙 Full episodes
            <br />
            <small>edited end-to-end</small>
          </div>
          <div>
            ✂ Reels &amp; Shorts
            <br />
            <small>repurposed weekly</small>
          </div>
          <div>
            ▶ YouTube
            <br />
            <small>published &amp; delivered</small>
          </div>
        </div>
      </div>
      <div className="testi">
        <div className="t-ava">
          <img src="https://i.pravatar.cc/200?img=60" alt="" />
          <span className="t-play">▶</span>
        </div>
        <div className="t-name">My working thesis</div>
        <p className="t-quote">
          &quot;Distribution is 10 times more valuable than the product itself.
          <br />
          Consistent distribution increases the surface area for
          opportunity.&quot;
        </p>
        <a href="#cta" className="cta-white" onClick={open}>
          Book a call
        </a>
      </div>
    </section>
  );
}
