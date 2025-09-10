"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Calendar, User, CreditCard } from "lucide-react"

interface FlightBooking {
    id: string
    origin: string
    destination: string
    date: string
    passengerName: string
    totalPrice: string
    status: "confirmed" | "pending" | "cancelled"
    flightNumber: string
    departureTime: string
    arrivalTime: string
}

interface FlightBookingsGridProps {
    bookings: FlightBooking[]
    onViewDetails?: (bookingId: string) => void
}

const mockBookings: FlightBooking[] = [
    {
        id: "WF001",
        origin: "DUB",
        destination: "CDG",
        date: "2024-12-15",
        passengerName: "Sarah Johnson",
        totalPrice: "€289",
        status: "confirmed",
        flightNumber: "EI524",
        departureTime: "08:30",
        arrivalTime: "11:45",
    },
    {
        id: "WF002",
        origin: "LHR",
        destination: "JFK",
        date: "2024-12-18",
        passengerName: "Michael Chen",
        totalPrice: "€756",
        status: "confirmed",
        flightNumber: "BA117",
        departureTime: "14:20",
        arrivalTime: "17:35",
    },
    {
        id: "WF003",
        origin: "BCN",
        destination: "FCO",
        date: "2024-12-20",
        passengerName: "Emma Rodriguez",
        totalPrice: "€145",
        status: "pending",
        flightNumber: "VY6134",
        departureTime: "19:15",
        arrivalTime: "21:00",
    },
    {
        id: "WF004",
        origin: "AMS",
        destination: "BER",
        date: "2024-12-22",
        passengerName: "James Wilson",
        totalPrice: "€198",
        status: "confirmed",
        flightNumber: "KL1804",
        departureTime: "12:10",
        arrivalTime: "13:25",
    },
    {
        id: "WF005",
        origin: "MAD",
        destination: "LIS",
        date: "2024-12-25",
        passengerName: "Ana Silva",
        totalPrice: "€89",
        status: "confirmed",
        flightNumber: "IB3201",
        departureTime: "16:45",
        arrivalTime: "17:30",
    },
    {
        id: "WF006",
        origin: "ZUR",
        destination: "VIE",
        date: "2024-12-28",
        passengerName: "David Mueller",
        totalPrice: "€234",
        status: "cancelled",
        flightNumber: "LX1566",
        departureTime: "09:55",
        arrivalTime: "11:10",
    },
]

const getStatusColor = (status: FlightBooking["status"]) => {
    switch (status) {
        case "confirmed":
            return "bg-green-100 text-green-800 hover:bg-green-200"
        case "pending":
            return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
        case "cancelled":
            return "bg-red-100 text-red-800 hover:bg-red-200"
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
}

export function RecentBookings({ bookings = mockBookings, onViewDetails }: FlightBookingsGridProps) {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Recent Flight Bookings</h2>
                    <p className="text-muted-foreground">Manage your upcoming and past flights</p>
                </div>
                <Badge variant="secondary" className="px-3 py-1">
                    {bookings.length} bookings
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                    <Card
                        key={booking.id}
                        className="group overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 border-border/50"
                    >
                        <CardContent className="p-6">
                            {/* Flight Route Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2 text-lg font-bold">
                                        <span className="text-brand-azure">{booking.origin}</span>
                                        <Plane className="h-4 w-4 text-muted-foreground rotate-90" />
                                        <span className="text-brand-azure">{booking.destination}</span>
                                    </div>
                                </div>
                                <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                            </div>

                            {/* Flight Details */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                    {new Date(booking.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                    })}
                  </span>
                                    <span className="text-xs">•</span>
                                    <span>{booking.flightNumber}</span>
                                </div>

                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <User className="h-4 w-4" />
                                    <span>{booking.passengerName}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-muted-foreground">
                                        {booking.departureTime} → {booking.arrivalTime}
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-lg font-bold text-brand-azure">{booking.totalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="p-6 pt-0">
                            <Button
                                variant="outline"
                                className="w-full group-hover:bg-brand-azure group-hover:text-white group-hover:border-brand-azure transition-colors bg-transparent"
                                onClick={() => onViewDetails?.(booking.id)}
                            >
                                View Details
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
