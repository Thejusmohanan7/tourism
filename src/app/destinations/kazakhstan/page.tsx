import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "kazakhstan",
    name: "Kazakhstan",
    description: "Kazakhstan holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Kazakhstan() {
    return (
        <DestinationLayout
            slug="kazakhstan"
            name="Kazakhstan"
            caption="Wide-Open Natural Beauty"
            quote="Discover dramatic landscapes and modern cities."
            about={
                ["Kazakhstan is a destination of vast open spaces, alpine lakes, mountain scenery, and contemporary city life. Explore Almaty's mountain backdrop, visit the beautiful Big Almaty Lake region, and experience Astana's striking architecture.", "Nature lovers can enjoy scenic viewpoints and outdoor excursions, while city travellers can discover museums, cafés, and local culture. We help arrange stays and transfers for your Kazakhstan journey."]
            }
        />
    );
}
