"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const GROUPS: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "🖐 Start here…",
    items: [
      {
        q: "Who is Abhishek?",
        a: "A Video Editor and Podcast Editor with 3+ years of experience across content analysis, video production, creative leadership, podcast editing, short-form repurposing and AI-assisted workflows.",
      },
      {
        q: "What is the current focus?",
        a: "Long-form podcast production at Kerala Product Hunt — full episode edits, short-form repurposing into Reels and Shorts, and YouTube publishing and delivery.",
      },
      {
        q: "How did this career start?",
        a: "As a Content Analyst, learning audience behaviour and why certain content works — a foundation that still shapes every editing decision.",
      },
      {
        q: "What about leadership experience?",
        a: "Video Editing Team Lead: coordinating people, workflows, quality and delivery — learning to own the outcome, not just the timeline.",
      },
      {
        q: "Why podcasts?",
        a: "A podcast holds stories, opinions, pauses and unexpected moments. The editor gives it structure without destroying the authenticity that makes it valuable.",
      },
    ],
  },
  {
    heading: "⚙ How does the work happen?",
    items: [
      {
        q: "What does the editing workflow look like?",
        a: "Raw recording in, structured story out: full-episode pacing and structure first, then the strongest moments repurposed into platform-ready short-form.",
      },
      {
        q: "How is one episode turned into many outputs?",
        a: "Think in systems: one conversation becomes a YouTube episode, multiple short clips, promotional assets and future content ideas.",
      },
      {
        q: "What tools are in the toolkit?",
        a: "Adobe Premiere Pro and After Effects for the craft, CapCut and Canva for speed, plus ChatGPT and AI-assisted tools for ideas and research.",
      },
      {
        q: "Where does AI fit in?",
        a: "As leverage, not replacement: AI accelerates repetitive and exploratory work while creative judgement stays human-led.",
      },
    ],
  },
  {
    heading: "💡 And next…",
    items: [
      {
        q: "What is being learned right now?",
        a: "Motion design and motion graphics through continued After Effects practice — deliberately developing, not yet a mastered discipline.",
      },
      {
        q: "What is the distribution thesis?",
        a: "\u201CDistribution is 10 times more valuable than the product itself.\u201D Consistent distribution increases the surface area for opportunity — engineering luck.",
      },
      {
        q: "Where is this heading long-term?",
        a: "Toward creative direction and content-system ownership — helping founders and creators turn ideas into consistent content and distribution engines.",
      },
      {
        q: "What should the portfolio show?",
        a: "Long-form edits, short-form repurposing, storytelling and pacing, raw-to-final production — progression and process, not just software skills.",
      },
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="faq" id="faq">
      <div className="faq-l">
        <h2>
          Have
          <br />
          <em>a question?</em>
        </h2>
      </div>
      <div className="faq-r">
        {GROUPS.map((g) => (
          <div key={g.heading}>
            <h4>{g.heading}</h4>
            {g.items.map((it) => {
              const id = `${g.heading}${it.q}`;
              const isOpen = open === id;
              return (
                <div key={id} className={cn("acc", isOpen && "open")}>
                  <button onClick={() => setOpen(isOpen ? null : id)}>
                    {it.q}
                    <span>⌄</span>
                  </button>
                  <div className="acc-b">
                    <p>{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
