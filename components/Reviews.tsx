const REVIEWS = [
  {
    img: "https://i.pravatar.cc/64?img=5",
    name: "Edit for the audience",
    role: "Working principle",
    text: "Not just the timeline: every cut is made for the person watching — what makes them stop, understand and keep watching.",
  },
  {
    img: "https://i.pravatar.cc/64?img=47",
    name: "Preserve authenticity",
    role: "Working principle",
    text: "Shape pacing and structure without destroying what makes the conversation valuable in the first place.",
  },
  {
    img: "https://i.pravatar.cc/64?img=32",
    name: "Think in systems",
    role: "Working principle",
    text: "One conversation becomes an episode, clips, promos and future ideas — never an isolated asset.",
  },
  {
    img: "https://i.pravatar.cc/64?img=15",
    name: "Distribution is creative",
    role: "Working principle",
    text: "Publishing is part of the process: consistent distribution increases the surface area for opportunity.",
  },
  {
    img: "https://i.pravatar.cc/64?img=8",
    name: "AI as leverage",
    role: "Working principle",
    text: "AI accelerates the repetitive and exploratory work — creative judgement stays human-led.",
  },
  {
    img: "https://i.pravatar.cc/64?img=44",
    name: "Own the outcome",
    role: "Working principle",
    text: "Not merely the task: from raw material to published video, the result is the responsibility.",
  },
  {
    img: "https://i.pravatar.cc/64?img=13",
    name: "Keep learning",
    role: "Working principle",
    text: "Motion design today, creative automation tomorrow — depth in editing, curiosity everywhere.",
  },
  {
    img: "https://i.pravatar.cc/64?img=26",
    name: "Engineering luck",
    role: "Distribution thesis",
    text: "\u201CDistribution is 10 times more valuable than the product itself\u201D — my personal working thesis.",
  },
  {
    img: "https://i.pravatar.cc/64?img=59",
    name: "Still becoming",
    role: "Career statement",
    text: "Learned how content works, then how to make it, then how to lead it — now building systems that help it travel.",
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="sec-h">
        What guides every edit
        <br />
        <em>principles I cut by.</em>
      </h2>
      <div className="rev-grid">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rev">
            <div className="rev-h">
              <img src={r.img} alt="" />
              <div>
                <b>{r.name}</b>
                <small>{r.role}</small>
              </div>
            </div>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
