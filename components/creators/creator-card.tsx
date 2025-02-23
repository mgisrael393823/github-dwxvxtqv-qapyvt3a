import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { CheckCircle, Star } from "lucide-react";

interface CreatorCardProps {
  name: string;
  location: string;
  services: string[];
  rating: number;
  reviews: number;
  startingPrice: number;
  basePrice: number;
  tags: string[];
  verified?: boolean;
}

export function CreatorCard({
  name,
  location,
  services,
  rating,
  reviews,
  startingPrice,
  basePrice,
  tags,
  verified = false,
}: CreatorCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <img
          src={`https://source.unsplash.com/800x600/?property,${services[0]}`}
          alt={`${name}'s work`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-sm font-medium backdrop-blur-sm">
          From ${startingPrice}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-background">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} 
                alt={`${name}'s avatar`}
              />
              <AvatarFallback>
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-semibold">{name}</h3>
                {verified && (
                  <CheckCircle className="h-4 w-4 text-primary fill-primary/10" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{rating}</span>
            </div>
            <span className="text-muted-foreground">
              ({reviews} reviews)
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              ${basePrice}/hr
            </span>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white transition-transform hover:scale-[1.02] hover:shadow-lg dark:text-black">
          Join Waitlist
        </Button>
      </div>
    </div>
  );
}