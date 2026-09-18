const REVIEWS = [
  {
    img: "https://i.pravatar.cc/64?img=5",
    name: "Nicolas Petit",
    role: "Boucherie OhlaVache Reims",
    text: "On a fait beaucoup de tournages récurrents dans la boucherie. Et, on a gagné avec ça des millions de vues et surtout beaucoup de clients.",
  },
  {
    img: "https://i.pravatar.cc/64?img=47",
    name: "Lucie Marcolongo",
    role: "Content Marketing Manager @MarkC",
    text: "Jean-Baptiste est une personne très pro, empathique et a beaucoup d'expertise dans son domaine! N'hésitez pas à travailler avec lui",
  },
  {
    img: "https://i.pravatar.cc/64?img=32",
    name: "Lou Attal",
    role: "Consultante certifiée Notion",
    text: "Pilea m'aide pour beaucoup de choses. À commencer par ma chaîne Youtube, ils sont là depuis le début. Autant sur les conseils pour le matériel, que sur la production vidéo.",
  },
  {
    img: "https://i.pravatar.cc/64?img=15",
    name: "Jérôme Colombain",
    role: "Podcasteur @MondeNumérique",
    text: "Une équipe dynamique, compétente et sérieuse. Super boulot !",
  },
  {
    img: "https://i.pravatar.cc/64?img=8",
    name: "Frédéric Hermelin",
    role: "Head of Communication",
    text: "Un reportage photo / vidéo rondement mené tout en agilité pour une soirée officielle qui aura su marquer les esprits ! Et en bonus offert le speach du Ministre ! Un grand MERCI à l'équipe 👍",
  },
  {
    img: "https://i.pravatar.cc/64?img=44",
    name: "Fanny Nusbaum",
    role: "Essayiste, conférencière, chercheur, psychologue",
    text: "Qu'est-ce que j'ai aimé avec Pilea ? Fiou, tellement de choses. Ils sont sympas, ils sont vraiment fiables, c'est super important. Très carré et en plus ultra créatifs ce qui ne gâche rien !",
  },
  {
    img: "https://i.pravatar.cc/64?img=13",
    name: "Querimont",
    role: "Concept Store",
    text: "L'agence a réussi à créer l'ensemble du projet, elle a su capter l'image du concept, le tout avec une grande autonomie.",
  },
  {
    img: "https://i.pravatar.cc/64?img=26",
    name: "SCP Béatrice Bosserelle",
    role: "Commissaire de Justice",
    text: "Merci pour la réactivité, le suivi, la disponibilité et la satisfaction du résultat. Je continuerai à faire appel",
  },
  {
    img: "https://i.pravatar.cc/64?img=59",
    name: "DaLorenzo",
    role: "Ristorante ITALY",
    text: "They made a great job, WITH love and Passion in this work !",
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="sec-h">
        Ainsi, que de diffuser
        <br />
        <em>+ 10 000 publications sur tous les réseaux sociaux.</em>
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
