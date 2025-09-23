
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
    {
      quote:
        "This course transformed my career… gave me the skills to land my dream job in AI.",
      name: "Data Science Student",
      company: "HAC Graduate",
      avatar: "https://placehold.co/100x100.png",
      hint: "man portrait",
    },
    {
      quote:
        "Best coach I’ve ever had. Superb coach, with all practical insights. You won't regret it.",
      name: "Former Student",
      company: "via LinkedIn",
      avatar: "https://placehold.co/100x100.png",
      hint: "woman portrait",
    },
    {
        quote:
          "Great coach... you won’t regret it. Thank you for your guidance and support.",
        name: "Agile Professional",
        company: "via LinkedIn",
        avatar: "https://placehold.co/100x100.png",
        hint: "person portrait",
    },
  ];

export function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="p-8 text-center bg-card/50">
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                  data-ai-hint={testimonial.hint}
                />
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-base text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
