"use client";

import { useCallback, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Creators from "@/components/Creators";
import Work from "@/components/Work";
import Method from "@/components/Method";
import CaseShubham from "@/components/CaseShubham";
import CaseFanny from "@/components/CaseFanny";
import Reviews from "@/components/Reviews";
import LogoWall from "@/components/LogoWall";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useSiteEffects } from "@/hooks/useSiteEffects";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useSiteEffects();

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />
      <div className="page-glow" id="pageGlow" />
      <Nav onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Creators onOpenModal={openModal} />
        <Work />
        <Method onOpenModal={openModal} />
        <CaseShubham onOpenModal={openModal} />
        <Reviews />
        <CaseFanny onOpenModal={openModal} />
        <LogoWall />
        <Booking />
        <Faq />
      </main>
      <Footer />
      <BookingModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
