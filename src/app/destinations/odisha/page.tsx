import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "odisha",
    name: "Odisha",
    description: "Odisha holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Odisha() {
    return (
        <DestinationLayout
            slug="odisha"
            name="Odisha"
            caption="Temples, Coastlines and Living Traditions"
            quote="Explore the cultural treasures of eastern India."
            about={
                ["Odisha offers remarkable temple architecture, coastal scenery, traditional crafts, and wildlife-rich wetlands. Visit the Sun Temple at Konark, explore the Jagannath Temple area in Puri, and discover the lakeside landscapes of Chilika.", "Enjoy heritage sightseeing, beach time, local cuisine, and nature experiences. We can help plan stays and transfers for a memorable Odisha holiday."]
            }
        />
    );
}
