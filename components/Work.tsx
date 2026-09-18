const ROW1 = ["pilea1", "pilea2", "pilea3", "pilea4", "pilea5"];
const ROW2 = ["pilea6", "pilea7", "pilea8", "pilea9", "pilea10"];

const FEATS = [
  {
    title: "⚡ Sans engagement",
    text: "Arrêtez-vous quand vous le voulez. Et bénéficiez d'une force de frappe activable à votre disposition.",
  },
  {
    title: "⁘ Matching de monteurs",
    text: "Nous attribuerons nos talents en fonction des codes de votre secteur d'activité ou du sujet abordé.",
  },
  {
    title: "💬 Interlocuteur dédié",
    text: "Un chef de projet vous sera attribué pour faciliter les échanges avec un hub en ligne et une ligne directe.",
  },
  {
    title: "♛ Monteurs vidéo qualifiés",
    text: "Chaque monteur/euse est testé et encadré par vous garantir une qualité de production au top sur chaque vidéo.",
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
