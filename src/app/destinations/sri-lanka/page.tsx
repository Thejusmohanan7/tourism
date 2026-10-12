import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "sri-lanka",
    name: "Sri Lanka",
    description: "Sri Lanka holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function SriLanka() {
    return (
        <DestinationLayout
            slug="sri-lanka"
            name="Sri Lanka"
            caption="Pearl of the Indian Ocean"
            quote="Small island, unforgettable discoveries."
            about={
                ["Sri Lanka brings together golden beaches, ancient heritage, misty tea hills, and wildlife-rich national parks. Explore the historic sites of Sigiriya and Kandy, ride through scenic hill-country landscapes, and unwind along the southern coast.", "Enjoy cultural tours, nature experiences, local food, and peaceful beach stays. Whether you want adventure, relaxation, or a family holiday, we can help plan a Sri Lankan journey suited to your travel style."]
            }
        />
    );
}
