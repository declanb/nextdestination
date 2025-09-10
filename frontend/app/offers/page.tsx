'use client'

import { useSearchParams } from "next/navigation"
import { PageShell } from "@/components/layout/PageShell"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const MOCK_FLIGHTS = [
    {
        id: "abc123",
        title: "Morning Flight",
        airline: "Aer Lingus",
        image: "https://images.unsplash.com/photo-1607944008471-b682b66b6b4d?q=80&w=1200&auto=format&fit=crop",
        time: "08:00 - 11:00",
        price: "€179",
    },
    {
        id: "def456",
        title: "Afternoon Flight",
        airline: "Ryanair",
        image: "https://images.unsplash.com/photo-1570197571499-230c3f1378b0?q=80&w=1200&auto=format&fit=crop",
        time: "14:30 - 17:30",
        price: "€139",
    },
]

export default function OffersPage() {
    const params = useSearchParams()
    const origin = params.get("origin")
    const dest = params.get("dest")
    const date = params.get("date")

    if (!origin || !dest || !date) {
        return <p className="text-red-600 font-semibold">Missing required search parameters.</p>
    }

    return (
        <PageShell>
            <h1 className="text-2xl font-bold mb-4">
                ✈️ Flights from {origin} to {dest} on {date}
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {MOCK_FLIGHTS.map((flight) => (
                    <div
                        key={flight.id}
                        className="rounded-lg border shadow-sm overflow-hidden bg-white"
                    >
                        <Image
                            src={flight.image}
                            alt={flight.title}
                            width={800}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{flight.title}</h2>
                            <p className="text-sm text-muted-foreground mb-1">{flight.airline}</p>
                            <p className="text-sm">{flight.time}</p>
                            <p className="text-xl font-bold mt-2">{flight.price}</p>
                            <Button
                                className="mt-4 w-full"
                                onClick={() =>
                                    window.location.href = `/book?origin=${origin}&dest=${dest}&date=${date}&flightId=${flight.id}`
                                }
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </PageShell>
    )
}