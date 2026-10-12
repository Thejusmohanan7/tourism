import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "andaman",
    name: "Andaman Islands",
    description: "Andaman Islands holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Andaman() {
    return (
        <DestinationLayout
            slug="andaman"
            name="Andaman Islands"
            caption="Blue Waters and Quiet Shores"
            quote="Find your own corner of island paradise."
            about={
                ["The Andaman Islands are known for clear blue waters, sandy beaches, and lush tropical scenery. Visit the beaches of Swaraj Dweep, explore the historic Cellular Jail in Port Blair, and enjoy the region's peaceful island atmosphere.", "Snorkelling, boat excursions, beach time, and sunset views make the islands a wonderful choice for couples and families. We can help arrange stays and transfers to make island travel easier."]
            }
        />
    );
}
