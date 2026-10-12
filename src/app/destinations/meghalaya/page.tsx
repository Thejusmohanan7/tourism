import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "meghalaya",
    name: "Meghalaya",
    description: "Meghalaya holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Meghalaya() {
    return (
        <DestinationLayout
            slug="meghalaya"
            name="Meghalaya"
            caption="The Abode of Clouds"
            quote="Waterfalls, living root bridges, and green valleys."
            about={
                ["Meghalaya is known for rolling green hills, dramatic waterfalls, caves, and unique living root bridges. Explore Shillong, visit the crystal-clear waters around Dawki, and discover the villages and root bridges near Cherrapunji and Nongriat.", "Scenic drives, nature walks, village experiences, and waterfalls make Meghalaya a memorable escape for nature lovers. We can help organise stays and transfers for your journey."]
            }
        />
    );
}
