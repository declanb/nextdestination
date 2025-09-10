// frontend/components/layout/PageShell.tsx
'use client'

import { cn } from "@/lib/utils" // optional if you're using className merging elsewhere

export function PageShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-4xl px-6 py-10">
                {children}
            </div>
        </div>
    )
}