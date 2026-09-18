import React from "react";

type Cell =
  | { kind: "text"; text: string; cls?: string }
  | { kind: "ava"; img: string; name: string; subs: string };

const ROWS: Cell[][] = [
  [
    { kind: "text", text: "Premiere Pro", cls: "b" },
    { kind: "text", text: "After Effects" },
    { kind: "text", text: "CapCut", cls: "b" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=13", name: "Content Analyst", subs: "Foundations" },
    { kind: "text", text: "Canva", cls: "b" },
    { kind: "text", text: "ChatGPT", cls: "box" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=15", name: "Video Editor", subs: "The craft" },
    { kind: "text", text: "PODCAST", cls: "xl" },
    { kind: "text", text: "◍ YOUTUBE" },
  ],
  [
    { kind: "text", text: "Motion Design" },
    { kind: "text", text: "[Reels]" },
    { kind: "text", text: "Ⓝ Notion" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=32", name: "Team Lead", subs: "Ownership" },
    { kind: "text", text: "Shorts" },
    { kind: "text", text: "↗ AI tools" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=11", name: "Podcast Editor", subs: "KPH" },
    { kind: "text", text: "Storytelling" },
    { kind: "text", text: "CLIPS", cls: "b" },
  ],
  [
    { kind: "text", text: "Raw footage" },
    { kind: "text", text: "LONG-FORM", cls: "b" },
    { kind: "text", text: "◍ Hooks" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=59", name: "Kerala Product Hunt", subs: "Current home" },
    { kind: "text", text: "DISTRIBUTION" },
    { kind: "text", text: "REELS" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=53", name: "Meta Algorithm", subs: "Where it started" },
    { kind: "text", text: "Publishing" },
    { kind: "text", text: "OLOPO APP" },
  ],
  [
    { kind: "text", text: "PACING" },
    { kind: "text", text: "Subtitles", cls: "b" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=32", name: "Motion", subs: "Learning" },
    { kind: "text", text: "✖ CUTS", cls: "b" },
    { kind: "text", text: "_TIMELINE_" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=60", name: "AI Workflows", subs: "Systems" },
    { kind: "text", text: "YouTube" },
    { kind: "text", text: "SHORTS" },
    { kind: "text", text: "HOOKS" },
  ],
  [
    { kind: "text", text: "AUTHENTICITY" },
    { kind: "text", text: "STORY" },
    { kind: "text", text: "Reels.", cls: "b" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=8", name: "Olopo App", subs: "Creative growth" },
    { kind: "text", text: "Your project?", cls: "you" },
    { kind: "ava", img: "https://i.pravatar.cc/40?img=3", name: "KPH Podcast", subs: "Weekly episodes" },
    { kind: "text", text: "Distribution" },
    { kind: "text", text: "ē·d·i·t" },
  ],
];

export default function LogoWall() {
  return (
    <section className="logos" id="tarif">
      <h2 className="sec-h">
        The short version:
        <br />
        <em>the tools I reach for.</em>
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
          Ah, <em>right here.</em>
        </p>
      </div>
    </section>
  );
}
