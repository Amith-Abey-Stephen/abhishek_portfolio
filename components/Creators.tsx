"use client";

const CREATORS = [
  { img: "https://i.pravatar.cc/40?img=12", name: "Podcast Monde Numérique", subs: "+4k abonnés" },
  { img: "https://i.pravatar.cc/40?img=5", name: "Follow me", subs: "+1.7k abonnés" },
  { img: "https://i.pravatar.cc/40?img=13", name: "Jordane Saget", subs: "+2.4M abonnés" },
  { img: "https://i.pravatar.cc/40?img=32", name: "MicroByFlo", subs: "+49k abonnés" },
  { img: "https://i.pravatar.cc/40?img=59", name: "Miccode", subs: "+1.4M abonnés" },
  { img: "https://i.pravatar.cc/40?img=15", name: "Matthias Frank", subs: "+14k abonnés" },
  { img: "https://i.pravatar.cc/40?img=53", name: "Wakz", subs: "+132k abonnés" },
  { img: "https://i.pravatar.cc/40?img=8", name: "Better Creating", subs: "+157k abonnés" },
  { img: "https://i.pravatar.cc/40?img=11", name: "Matthieu Stephani", subs: "+41k abonnés" },
  { img: "https://i.pravatar.cc/40?img=3", name: "Alexandre Calvez", subs: "+1.2M abonnés" },
  { img: "https://i.pravatar.cc/40?img=60", name: "Shubham Sharma", subs: "+180k abonnés" },
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
        Nous avons réalisé
        <br />
        <em>+ de 2 000 vidéos pour + de 250 clients.</em>
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
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
