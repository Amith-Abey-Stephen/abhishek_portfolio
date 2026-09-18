"use client";

const CREATORS = [
  { img: "https://i.pravatar.cc/40?img=12", name: "Content Analyst", subs: "Where it started" },
  { img: "https://i.pravatar.cc/40?img=5", name: "Video Editor", subs: "3+ years of craft" },
  { img: "https://i.pravatar.cc/40?img=13", name: "Team Lead", subs: "Creative ownership" },
  { img: "https://i.pravatar.cc/40?img=32", name: "Podcast Editor", subs: "Current specialisation" },
  { img: "https://i.pravatar.cc/40?img=59", name: "Short-form", subs: "Reels & Shorts" },
  { img: "https://i.pravatar.cc/40?img=15", name: "Storytelling", subs: "Raw to narrative" },
  { img: "https://i.pravatar.cc/40?img=53", name: "AI Workflows", subs: "Faster systems" },
  { img: "https://i.pravatar.cc/40?img=8", name: "Motion Design", subs: "Now learning" },
  { img: "https://i.pravatar.cc/40?img=11", name: "YouTube", subs: "Publishing & delivery" },
  { img: "https://i.pravatar.cc/40?img=3", name: "Marketing", subs: "Audience awareness" },
  { img: "https://i.pravatar.cc/40?img=60", name: "Distribution", subs: "Engineering luck" },
];

export default function Creators({ onOpenModal }: { onOpenModal: () => void }) {
  const loop = [...CREATORS, ...CREATORS.slice(0, 5)];
  return (
    <section className="creators">
      <div className="marquee" id="marquee1">
        <div className="mq-track">
          {loop.map((c, i) => (
            <span key={i} className="mq-pill">
              <img src={c.img} alt="" />
              <b>{c.name}</b>
              <small>{c.subs}</small>
            </span>
          ))}
        </div>
      </div>
      <h2 className="sec-h">
        Three years in,
        <br />
        <em>four stages of one craft.</em>
      </h2>
      <div className="cta-center">
        <a
          href="#cta"
          className="cta-white sm"
          onClick={(e) => {
            e.preventDefault();
            onOpenModal();
          }}
        >
          Book a call
        </a>
      </div>
    </section>
  );
}
