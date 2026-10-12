import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "maldives",
    name: "Maldives",
    description: "Maldives holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Maldives() {
    return (
        <DestinationLayout
            slug="maldives"
            name="Maldives"
            caption="Your Island Escape"
            quote="A little paradise in the middle of the ocean."
            about={
                ["The Maldives is known for its turquoise lagoons, white-sand beaches, and beautiful overwater villas. Spend your days relaxing by the sea, enjoying sunset cruises, or discovering colourful marine life in clear tropical waters.", "From romantic honeymoon experiences to family-friendly island stays, the Maldives offers the perfect setting to slow down and unwind. We can help arrange your resort stay, transfers, and island experiences for a relaxing getaway."]
            }
        />
    );
}
