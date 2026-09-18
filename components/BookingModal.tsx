"use client";

import { useEffect } from "react";
import BookingCalendar from "./BookingCalendar";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
          <button className="m-x" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h2>
          Let&apos;s take a moment,
          <br />
          <em>to talk about your next video.</em>
        </h2>
        <BookingCalendar mini />
      </div>
    </div>
  );
}
