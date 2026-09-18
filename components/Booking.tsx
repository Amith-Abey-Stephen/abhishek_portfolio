import BookingCalendar from "./BookingCalendar";

const MINI = [
  "NFT BUSINESS",
  "Ⓝ Notion",
  "FOUNDERS NIGHT",
  "Génération Do It Yourself",
  "Goodcity",
  "[investir]",
  "Orso Media",
  "La Micro by Flo",
  "keepeek",
];

export default function Booking() {
  return (
    <section className="booking" id="cta">
      <div className="book-head">
        <h2>
          Prenons un moment ensemble,
          <br />
          <em>pour discuter de votre prochaine vidéo.</em>
        </h2>
        <a className="dark-pill" href="mailto:jb@pilea.agency">
          Contacter par mail
        </a>
      </div>
      <BookingCalendar />
      <div className="mini-logos">
        {MINI.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </section>
  );
}
