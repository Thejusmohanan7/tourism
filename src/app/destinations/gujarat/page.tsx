import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "gujarat",
    name: "Gujarat",
    description: "Gujarat holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Gujarat() {
    return (
        <DestinationLayout
            slug="gujarat"
            name="Gujarat"
            caption="Heritage, Culture and Wide Horizons"
            quote="Discover a vibrant side of western India."
            about={
                ["Gujarat is rich in heritage, colourful crafts, spiritual landmarks, and striking natural landscapes. Explore Ahmedabad's historic architecture, visit the Statue of Unity, discover the white salt desert of the Rann of Kutch, and experience local traditions.", "From cultural tours and pilgrimage visits to wildlife and seasonal landscape experiences, Gujarat offers a wide variety of journeys. We can help plan stays and transfers for your trip."]
            }
        />
    );
}
