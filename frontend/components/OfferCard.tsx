import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type OfferCardProps = {
    title: string
    image?: string
    price: string
    onBook?: () => void
}

export function OfferCard({ title, image = "/images/placeholder.jpg", price, onBook }: OfferCardProps) {
    return (
        <Card className="group overflow-hidden border-border transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 384px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                />
            </div>

            <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">From {price}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                {/* If your shadcn theme defines primary colors in globals.css, this works.
           Otherwise just use <Button className="w-full">Book now</Button> */}
                <Button className="w-full" onClick={onBook} aria-label={`Book ${title}`}>
                    Book now
                </Button>
            </CardFooter>
        </Card>
    )
}