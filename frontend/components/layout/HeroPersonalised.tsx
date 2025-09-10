"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroPersonalised() {
    const [text, setText] = useState("")
    const router = useRouter()

    function parseIntentFreeform(t: string) {
        const lower = t.toLowerCase()
        const dest =
            lower.includes("paris") ? "CDG" :
                lower.includes("rome")  ? "FCO" :
                    lower.includes("barcelona") ? "BCN" :
                        lower.includes("malaga") ? "AGP" :
                            lower.includes("valletta") ? "MLA" :
                                "CDG"
        const origin = "DUB"
        const date = "2025-10-01" // can later be inferred from NLP
        return { origin, dest, date }
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const { origin, dest, date } = parseIntentFreeform(text)
        router.push(`/offers?origin=${origin}&dest=${dest}&date=${date}`)
    }

    return (
        <section className="bg-slate-50 rounded-md p-8">
            <h1 className="text-2xl font-bold mb-2">Welcome back, Declan ✈️</h1>
            <p className="text-muted-foreground mb-4">Based on your last trips 🇪🇸 🇮🇹 🇫🇷</p>

            <form className="flex gap-2" onSubmit={onSubmit}>
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Describe your trip… e.g., 'Paris in October under €500'"
                    className="flex-1"
                />
                <Button type="submit">✨ Recommend</Button>
            </form>

            <div className="mt-3 flex flex-wrap gap-2">
                {[
                    "Weekend in Paris in October",
                    "City break Rome",
                    "Barcelona getaway",
                    "Malaga chill trip",
                    "Valletta romantic escape"
                ].map((preset) => (
                    <Button
                        key={preset}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setText(preset)}
                    >
                        {preset}
                    </Button>
                ))}
            </div>
        </section>
    )
}