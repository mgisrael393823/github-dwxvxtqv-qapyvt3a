import { CreatorFilters } from "./creator-filters";
import { CreatorGrid } from "./creator-grid";

export function CreatorDiscovery() {
  return (
    <section className="container space-y-10 sm:space-y-16 py-12 sm:py-24">
      <div className="mx-auto max-w-[800px] space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Find Your Perfect Content Creator
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground px-4 sm:px-0">
          Connect with talented photographers, videographers, and content creators
          in your area. Filter by expertise, style, and budget to find your ideal match.
        </p>
      </div>

      <div className="mx-auto w-full">
        <CreatorFilters />
        <CreatorGrid />
      </div>
    </section>
  );
}