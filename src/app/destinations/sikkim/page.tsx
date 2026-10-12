import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "sikkim",
    name: "Sikkim",
    description: "Sikkim holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Sikkim() {
    return (
        <DestinationLayout
            slug="sikkim"
            name="Sikkim"
            caption="Himalayan Serenity"
            quote="A peaceful journey through mountains and monasteries."
            about={
                ["Sikkim offers snow-capped mountain views, colourful monasteries, alpine lakes, and welcoming hill towns. Explore Gangtok, visit Rumtek Monastery, and discover scenic viewpoints and mountain landscapes around the region.", "From cultural visits and relaxed sightseeing to nature-focused excursions, Sikkim is a wonderful destination for couples and families. We can help arrange stays and transfers suited to your itinerary."]
            }
        />
    );
}
