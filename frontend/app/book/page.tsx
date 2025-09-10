'use client'

import { useSearchParams } from "next/navigation"
import { BookingConfirmation } from "@/components/BookingConfirmation"

export default function BookPage() {
    const params = useSearchParams()

    const origin = params.get("origin") ?? "DUB"
    const dest = params.get("dest") ?? "CDG"
    const date = params.get("date") ?? "2025-10-01"
    const flightId = params.get("flightId") ?? "abc123"

    const handleConfirm = () => {
        // 🚀 Hook up to backend later
        alert("✅ Booking Confirmed!")
    }

    const handleBackToOffers = () => {
        window.location.href = `/offers?origin=${origin}&dest=${dest}&date=${date}`
    }

    return (
        <BookingConfirmation
            origin={origin}
            dest={dest}
            date={date}
            flightId={flightId}
            onConfirm={handleConfirm}
            onBackToOffers={handleBackToOffers}
        />
    )
}