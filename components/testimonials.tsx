"use client"

import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Marco Bellini",
      handle: "@marcobellini",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
    text: "Mosaico completely changed how we handle tile inspections. What used to take our team hours of manual analysis is now done in seconds with incredible accuracy. A must-have tool for any architecture firm.",
  },
  {
    author: {
      name: "Sarah Mitchell",
      handle: "@sarahmitchell",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    },
    text: "Virtual Staging AI transformed our real estate listings overnight. We went from empty room photos to stunning, photorealistic staged images in under 5 seconds. Our listing engagement jumped by 3x.",
  },
  {
    author: {
      name: "James Crawford",
      handle: "@jamescrawford",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    },
    text: "Find My Ball is a game-changer on the course. I used to lose 10 minutes searching for balls in the rough — now it spots them instantly. Every golfer in our club is using it.",
  },
  {
    author: {
      name: "Emma Richardson",
      handle: "@emmarichardson",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    },
    text: "BrandIntercept has been incredible for our marketing team. It monitors competitor conversations 24/7 and generates replies that actually convert. Our lead pipeline tripled within the first month.",
  },
  {
    author: {
      name: "Dr. Anika Patel",
      handle: "@anikapatel",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
    text: "HA App made wellness planning effortless for my patients. The personalized meal plans and exercise routines are spot-on, and the ability to create custom recipes is a feature everyone loves.",
  },
  {
    author: {
      name: "Daniel Okonkwo",
      handle: "@danielokonkwo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "DocExtract AI saved our finance team hundreds of hours. We process thousands of invoices monthly and the extraction accuracy is near-perfect. Manual data entry is now a thing of the past for us.",
  },
  {
    author: {
      name: "Lisa Tanaka",
      handle: "@lisatanaka",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "SmartCart is exactly what I needed — comparing grocery prices across Walmart and Pak'nSave in one place. I save both time and money every single week. Brilliant concept, flawless execution.",
  },
  {
    author: {
      name: "Chris Henley",
      handle: "@chrishenley",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "RecipeGen AI feels like having a personal chef in my pocket. I just tell it what's in my fridge and my dietary needs, and it creates amazing recipes in seconds. Dinner planning has never been easier.",
  },
]

export function Testimonials() {
  return (
    <div id="testimonials">
      <TestimonialsSection
        title={<>What Our <span className="gradient-text">Clients Say</span></>}
        description="Don't take our word for it — hear from the businesses we've transformed."
        testimonials={testimonials}
      />
    </div>
  )
}
