import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    description: "Leh Ladakh holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function LehLadakh() {
    return (
        <DestinationLayout
            slug="leh-ladakh"
            name="Leh Ladakh"
            caption="High-Altitude Adventure"
            quote="A dramatic landscape that stays with you."
            about={
                ["Leh Ladakh is known for rugged mountains, high-altitude lakes, winding passes, and Buddhist monasteries. Discover the landscapes around Pangong Lake, visit Thiksey Monastery, and explore Leh's markets and surrounding valleys.", "The region is best enjoyed with thoughtful acclimatisation and a well-paced itinerary. We can help organise stays and transfers while keeping travel time and altitude in mind."]
            }
        />
    );
}
