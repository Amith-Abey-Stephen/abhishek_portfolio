import React from "react";

type Cell =
  | { kind: "text"; text: string; cls?: string }
  | { kind: "ava"; img: string; name: string; subs: string };

const ROWS: Cell[][] = [
  [
    { kind: "text", text: "Goodcity" },
    { kind: "text", text: "PASSIAMAN." },
    { kind: "text", text: "FOLLOW ME", cls: "b" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=13", name: "Jordan Saget", subs: "+2.4M abonnés" },
    { kind: "text", text: "La Micro by Flo", cls: "b" },
    { kind: "text", text: "LINAGORA", cls: "box" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=15", name: "Podcast Monde", subs: "+4k abonnés" },
    { kind: "text", text: "ESP", cls: "xl" },
    { kind: "text", text: "◍ FOUNDERS NIGHT" },
  ],
  [
    { kind: "text", text: "Génération Do It Yourself" },
    { kind: "text", text: "[investir]" },
    { kind: "text", text: "Ⓝ Notion" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=32", name: "MicroByFlo", subs: "+49k abonnés" },
    { kind: "text", text: "meilleurtaux" },
    { kind: "text", text: "↗ submagic" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=11", name: "Matthieu Stephani", subs: "+41k abonnés" },
    { kind: "text", text: "Orso Media" },
    { kind: "text", text: "DFC", cls: "b" },
  ],
  [
    { kind: "text", text: "Renard" },
    { kind: "text", text: "NFT BUSINESS", cls: "b" },
    { kind: "text", text: "◍ abyssale" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=59", name: "Miccode", subs: "+1.4M abonnés" },
    { kind: "text", text: "MONDE NUMERIQUE" },
    { kind: "text", text: "DEEZER" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=53", name: "Wakz", subs: "+132k abonnés" },
    { kind: "text", text: "keepeek" },
    { kind: "text", text: "JORDANE SAGET" },
  ],
  [
    { kind: "text", text: "LEXIPAIE" },
    { kind: "text", text: "Eskimoz", cls: "b" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=32", name: "Lou Attal", subs: "+8k abonnés" },
    { kind: "text", text: "✖ STELLO", cls: "b" },
    { kind: "text", text: "_UNDERSCORE_" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=60", name: "Shubham Sharma", subs: "+180k abonnés" },
    { kind: "text", text: "Smurfit Westrock" },
    { kind: "text", text: "LA VACHE !" },
    { kind: "text", text: "CAPSU⫿" },
  ],
  [
    { kind: "text", text: "B-INVEST" },
    { kind: "text", text: "POWERHOUSE" },
    { kind: "text", text: "Papisy.", cls: "b" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=8", name: "Better Creating", subs: "+157k abonnés" },
    { kind: "text", text: "Votre logo ?", cls: "you" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=3", name: "Alexandre Calvez", subs: "+1.2M abonnés" },
    { kind: "text", text: "Querimont" },
    { kind: "text", text: "ē·s·d" },
  ],
];

export default function LogoWall() {
  return (
    <section className="logos" id="tarif">
      <h2 className="sec-h">
        Mais, je vous rassure,
        <br />
        <em>il nous reste de la place…</em>
      </h2>
      <div className="logo-grid">
        {ROWS.flat().map((c, i) =>
          c.kind === "ava" ? (
            <span key={i} className="ava">
              <img src={c.img} alt="" />
              {c.name}
              <br />
              <small>{c.subs}</small>
            </span>
          ) : (
            <span key={i} className={c.cls}>
              {c.text.split("\n").map((line, j) => (
                <React.Fragment key={j}>
                  {j > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </span>
          )
        )}
      </div>
      <div className="juste">
        <svg viewBox="0 0 100 60">
          <path
            d="M50 5 C 20 30, 80 30, 55 55 M55 55 l-6 -10 M55 55 l8 -8"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>
        <p>
          Ah voilà, <em>juste ici.</em>
        </p>
      </div>
    </section>
  );
}
