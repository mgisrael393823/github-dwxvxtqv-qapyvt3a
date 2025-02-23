import { CreatorCard } from "./creator-card";

const demoCreators = [
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    services: ["Photography", "Drone"],
    rating: 4.9,
    reviews: 150,
    startingPrice: 599,
    basePrice: 85,
    tags: ["RealEstate", "Aerial", "IndoorDroneTour"],
    verified: true,
  },
  {
    name: "Jane Cooper",
    location: "New York, NY",
    services: ["Photography", "Videography"],
    rating: 4.8,
    reviews: 120,
    startingPrice: 499,
    basePrice: 75,
    tags: ["Interior", "Design", "Staging"],
    verified: true,
  },
  {
    name: "Emily Johnson",
    location: "Chicago, IL",
    services: ["Videography", "Editing"],
    rating: 4.7,
    reviews: 100,
    startingPrice: 399,
    basePrice: 65,
    tags: ["POV", "TikTok", "HomeTourWithMe"],
    verified: false,
  },
];

export function CreatorGrid() {
  return (
    <div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {demoCreators.map((creator) => (
        <CreatorCard key={creator.name} {...creator} />
      ))}
    </div>
  );
}