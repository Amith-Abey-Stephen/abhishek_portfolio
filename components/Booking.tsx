import BookingCalendar from "./BookingCalendar";

const MINI = [
  "Premiere Pro",
  "Ⓝ Notion",
  "After Effects",
  "Podcast Editing",
  "CapCut",
  "Short-form",
  "Canva",
  "YouTube",
  "AI Workflows",
];

export default function Booking() {
  return (
    <section className="booking" id="cta">
      <div className="book-head">
        <h2>
          Let&apos;s take a moment,
          <br />
          <em>to talk about your next video.</em>
        </h2>
        <a className="dark-pill" href="#faq">
          Questions?
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
