// app/layout.tsx
import { PageShell } from "@/components/layout/PageShell"
import "./globals.css"

export const metadata = {
    title: "NextDestAInation",
    description: "Smart travel recommendations",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-background text-foreground">
        <PageShell>
            {children}
        </PageShell>
        </body>
        </html>
    )
}