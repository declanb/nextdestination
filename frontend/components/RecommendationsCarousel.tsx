"use client"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OfferCard } from "@/components/OfferCard"

export type Offer = { title: string; image: string; price: string }

export function RecommendationsCarousel({ offers }: { offers: Offer[] }) {
    const ref = useRef<HTMLDivElement>(null)
    const scrollBy = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: "smooth" })

    return (
        <div className="relative">
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <Button variant="secondary" size="icon" aria-label="Previous" onClick={() => scrollBy(-360)}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <Button variant="secondary" size="icon" aria-label="Next" onClick={() => scrollBy(360)}>
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>

            <div ref={ref} className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth">
                {offers.map((o, i) => (
                    <div key={i} className="snap-start shrink-0 w-[320px]">
                        <OfferCard {...o} />
                    </div>
                ))}
            </div>
        </div>
    )
}