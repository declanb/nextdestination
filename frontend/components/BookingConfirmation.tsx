'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BookingConfirmationProps {
    onConfirm?: () => void
    onBackToOffers?: () => void
}

export function BookingConfirmation({ onConfirm, onBackToOffers }: BookingConfirmationProps) {
    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            {/* Flight Summary */}
            <Card className="rounded-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <span>✈️</span>
                        Flight Summary
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">DUB → CDG</span>
                        <span className="text-muted-foreground">AirNova</span>
                    </div>
                    <div className="text-muted-foreground">Wednesday, October 1st, 2025</div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">08:40 → 12:05</span>
                        <span className="text-sm text-muted-foreground">Duration: 2h 25m</span>
                    </div>
                </CardContent>
            </Card>

            {/* Passenger Details */}
            <Card className="rounded-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <span>👤</span>
                        Passenger Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Name</span>
                        <span>Declan Butler</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Seat(s)</span>
                        <span>Window + Middle</span>
                    </div>
                </CardContent>
            </Card>

            {/* Baggage Summary */}
            <Card className="rounded-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <span>💼</span>
                        Baggage Summary
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Checked bags</span>
                        <span>1 bag</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Cabin bags</span>
                        <span>2 bags</span>
                    </div>
                </CardContent>
            </Card>

            {/* Booking Total */}
            <Card className="rounded-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <span>🧾</span>
                        Booking Total
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                            <span>Base fare</span>
                            <span>€298.00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>Seat selection</span>
                            <span>€80.00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>Baggage</span>
                            <span>€50.00</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center font-semibold text-lg">
                            <span>Total</span>
                            <span>€428.00</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
                <Button
                    onClick={onConfirm}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 text-base font-medium rounded-lg transition-colors"
                >
                    Confirm Booking
                </Button>
                {onBackToOffers && (
                    <Button
                        onClick={onBackToOffers}
                        variant="outline"
                        className="w-full py-3 text-base font-medium rounded-lg bg-transparent"
                    >
                        Back to Offers
                    </Button>
                )}
            </div>
        </div>
    )
}
