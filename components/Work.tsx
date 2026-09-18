const ROW1 = ["pilea1", "pilea2", "pilea3", "pilea4", "pilea5"];
const ROW2 = ["pilea6", "pilea7", "pilea8", "pilea9", "pilea10"];

const FEATS = [
  {
    title: "🎙 Podcast editing",
    text: "Full-length episodes shaped for pacing and structure, without losing the authenticity of the conversation.",
  },
  {
    title: "✂ Short-form repurposing",
    text: "Strong moments identified and transformed into Reels, Shorts and clips — one source, every platform.",
  },
  {
    title: "📖 Storytelling",
    text: "Finding the narrative inside raw material: hooks, clarity and structure that hold attention.",
  },
  {
    title: "🤖 AI-assisted workflows",
    text: "AI as leverage for ideas, research and efficiency — with creative judgement staying human-led.",
  },
];

export default function Work() {
  return (
    <section className="work">
      <div className="work-row">
        <div className="w-track t1">
          {[...ROW1, ...ROW1].map((s, i) => (
            <img key={i} src={`https://picsum.photos/seed/${s}/560/315`} alt="" />
          ))}
        </div>
      </div>
      <div className="work-row">
        <div className="w-track t2">
          {[...ROW2, ...ROW2].map((s, i) => (
            <img key={i} src={`https://picsum.photos/seed/${s}/560/315`} alt="" />
          ))}
        </div>
      </div>

      <div className="feats">
        {FEATS.map((f) => (
          <div key={f.title}>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
