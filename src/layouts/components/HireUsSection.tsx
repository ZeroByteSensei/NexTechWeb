"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../partials/TextRevealCard";

export function HireUsSection() {
  return (
    <div className="flex items-center justify-center h-[20rem] mt-8 rounded-2xl w-full">
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
    </div>
  );
}
