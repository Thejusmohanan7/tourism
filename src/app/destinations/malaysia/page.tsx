import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "malaysia",
    name: "Malaysia",
    description: "Malaysia holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Malaysia() {
    return (
        <DestinationLayout
            slug="malaysia"
            name="Malaysia"
            caption="A Blend of Cultures"
            quote="City lights, rainforest trails, and tropical shores."
            about={
                ["Malaysia combines modern city attractions with cultural neighbourhoods, tropical islands, and lush rainforests. Discover Kuala Lumpur's famous skyline, explore Penang's heritage streets, or relax on the beaches of Langkawi.", "From food trails and shopping to nature excursions and family attractions, Malaysia has something for every kind of traveller. We arrange stays and transfers to help make your trip smooth and memorable."]
            }
        />
    );
}
