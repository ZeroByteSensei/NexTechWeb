"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../partials/TextRevealCard";

export function HireUsSection() {
  return (
    <div className="flex items-center justify-around h-[20rem] mt-8 rounded-2xl w-full">
      <p className="-rotate-90 text-3xl font-extrabold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">HOVER</p>
      <TextRevealCard
        text="Why Tire Up yourself with the work"
        revealText="When You Can Have Experts for it"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
      <p className="rotate-90 text-3xl font-extrabold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">HOVER</p>
    </div>
  );
}
