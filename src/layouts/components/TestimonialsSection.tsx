import { InfiniteMovingCards } from "@/partials/InfiniteMovingCards";
import SectionHeader from "@/partials/SectionHeader";

export function TestimonialsSection() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-gray-200 items-center justify-center relative overflow-hidden">
      <SectionHeader primaryText="TESTIMONIALS" secondaryText="WHAT OUR CLIENTS SAY" bgColor="bg-gray-200"/>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "All that we see or seem is but a dream within a dream. it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "All that we see or seem is but a dream within a dream.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "All that we see or seem is but a dream within a dream. I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
