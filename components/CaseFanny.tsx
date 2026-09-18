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
          And the direction:
          <br />
          <em>toward creative ownership.</em>
        </h2>
        <a className="dark-pill" href="#cta" onClick={open}>
          Work with me
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
          <span>Team Lead</span>
          <span>Systems</span>
          <span>Distribution</span>
        </div>
      </div>
      <div className="case-split">
        <div>From executing edits</div>
        <div>To owning the outcome</div>
      </div>
      <div className="testi">
        <div className="t-ava">
          <img src="https://i.pravatar.cc/200?img=44" alt="" />
        </div>
        <div className="t-name">Career statement</div>
        <p className="t-quote">
          &quot;I started by learning how content works. Then I learned how to
          make it. Then I learned how to lead the people and process behind
          it. Now I am learning how to build systems that help content travel
          further.&quot;
        </p>
        <a href="#cta" className="cta-white" onClick={open}>
          Book a call
        </a>
      </div>
    </section>
  );
}
