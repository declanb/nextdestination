// app/page.tsx
import { PageShell } from "@/components/layout/PageShell"
import { HeroPersonalised } from "@/components/layout/HeroPersonalised"
import { RecommendationsCarousel, type Offer } from "@/components/RecommendationsCarousel"
import { RecentBookings } from "@/components/RecentBookings"

const MOCK: Offer[] = [
    {
        title: "Barcelona Getaway",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
        price: "€399",
    },
    {
        title: "Rome Weekend",
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        price: "€349",
    },
    {
        title: "Paris Escape",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
        price: "€499",
    },
]

export default function Home() {
    return (
        <PageShell>
            <HeroPersonalised />
            <section className="mt-8">
                <h2 className="text-xl font-bold mb-4">Recommended for you</h2>
                <RecommendationsCarousel offers={MOCK} />
            </section>
            <section className="mt-12">
                <RecentBookings />
            </section>
        </PageShell>
    )
}