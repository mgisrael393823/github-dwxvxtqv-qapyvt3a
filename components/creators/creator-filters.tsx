import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";

const sortOptions = [
  { label: "Rating", value: "rating" },
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Price (High to Low)", value: "price_desc" },
  { label: "Distance", value: "distance" },
];

export function CreatorFilters() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Enter city or zip code"
            className="h-10 sm:h-12 pl-9 transition-shadow focus-visible:ring-primary group-hover:shadow-sm"
          />
        </div>
        <Input
          placeholder="Select content type"
          className="h-10 sm:h-12 w-full transition-shadow hover:shadow-sm focus-visible:ring-primary sm:w-[200px]"
        />
      </div>
      
      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" className="h-12 gap-2 text-base">
          <SlidersHorizontal className="h-4 w-4" />
          Advanced Filters
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-10 sm:h-12 gap-2 text-base">
              Sort By: Rating
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[180px] sm:w-[200px]">
            {sortOptions.map((option) => (
              <DropdownMenuItem key={option.value}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}