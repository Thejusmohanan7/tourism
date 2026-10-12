import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "uttarakhand",
    name: "Uttarakhand",
    description: "Uttarakhand holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Uttarakhand() {
    return (
        <DestinationLayout
            slug="uttarakhand"
            name="Uttarakhand"
            caption="Where the Mountains Meet the Sacred"
            quote="Nature, spirituality, and fresh mountain air."
            about={
                ["Uttarakhand is known for Himalayan views, forested hills, rivers, and important pilgrimage destinations. Explore Rishikesh and Haridwar, enjoy the lakeside setting of Nainital, or discover the scenic hill towns and mountain landscapes of the region.", "Whether you want a spiritual journey, a nature escape, or a family holiday, Uttarakhand offers a wide range of experiences. We can help plan your stays and transfers around your preferred itinerary."]
            }
        />
    );
}
