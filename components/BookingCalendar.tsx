"use client";

import { useState } from "react";

const HIGHLIGHTED = new Set([21, 22, 23, 24, 25, 5, 6, 7, 8, 9]);
const TIMES = [
  "12:30pm",
  "12:45pm",
  "1:00pm",
  "1:15pm",
  "1:30pm",
  "1:45pm",
  "3:00pm",
  "3:15pm",
  "3:30pm",
  "3:45pm",
];

function septDays(selDay: number, onPick: (d: number) => void) {
  const out: React.ReactNode[] = [];
  out.push(<span key="blank" />);
  for (let d = 1; d <= 30; d++) {
    const cls = [
      d < 8 ? "dim" : "",
      HIGHLIGHTED.has(d) ? "hl" : "",
      d === selDay ? "sel" : "",
    ]
      .filter(Boolean)
      .join(" ");
    out.push(
      <button key={`s${d}`} className={cls} onClick={() => onPick(d)}>
        {d === 18 ? (
          <>
            18
            <br style={{ lineHeight: 0 }} />•
          </>
        ) : (
          d
        )}
      </button>
    );
  }
  for (let d = 1; d <= 11; d++) {
    const hl = d <= 9 && HIGHLIGHTED.has(d);
    const cls = [hl ? "hl" : "dim", d === selDay ? "sel" : ""]
      .filter(Boolean)
      .join(" ");
    // original quirk: 5–9 of next month render undimmed
    const fixed = [5, 6, 7, 8, 9].includes(d) ? cls.replace("dim", "").trim() : cls;
    out.push(
      <button key={`o${d}`} className={fixed} onClick={() => onPick(d)}>
        {d}
      </button>
    );
  }
  return out;
}

export default function BookingCalendar({ mini = false }: { mini?: boolean }) {
  const [selDay, setSelDay] = useState(24);
  const [selTime, setSelTime] = useState("1:15pm");

  return (
    <div className={mini ? "cal mini" : "cal"}>
      <div className="cal-l">
        <div className="me">
          {!mini && <img src="https://i.pravatar.cc/40?img=13" alt="" />}
          <span>Jean-Baptiste Rogé</span>
          <h3>Rendez-vous découverte</h3>
          {mini ? (
            <p>◷ 15m • Google Meet</p>
          ) : (
            <>
              <p>◷ 15m</p>
              <p>📅 Google Meet</p>
              <p>🌐 Asia/Kolkata ⌄</p>
            </>
          )}
        </div>
      </div>
      <div className="cal-m">
        <div className="cal-top">
          <b>
            September <span>2026</span>
          </b>
          {!mini && <span>‹ &nbsp; ›</span>}
        </div>
        {!mini && (
          <div className="dow">
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
            <span>SUN</span>
          </div>
        )}
        <div className="days">{septDays(selDay, setSelDay)}</div>
      </div>
      <div className="cal-r">
        {!mini && (
          <div className="slots-top">
            <b>Thu {selDay}th</b>
            <span>
              <i className="on">12h</i>
              <i>24h</i>
            </span>
          </div>
        )}
        <div className="slots">
          {TIMES.map((t) => (
            <button
              key={t}
              className={t === selTime ? "sel" : ""}
              onClick={() => setSelTime(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
