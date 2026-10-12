import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "delhi-agra-jaipur",
    name: "Delhi Agra Jaipur",
    description: "Delhi Agra Jaipur holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function DelhiAgraJaipur() {
    return (
        <DestinationLayout
            slug="delhi-agra-jaipur"
            name="Delhi Agra Jaipur"
            caption="The Golden Triangle"
            quote="Three iconic cities, one unforgettable journey."
            about={
                ["The Delhi–Agra–Jaipur route brings together India's capital, Mughal heritage, and Rajasthan's royal architecture. Explore Delhi's historic landmarks, admire the Taj Mahal in Agra, and discover Jaipur's forts, palaces, and colourful bazaars.", "This classic route is ideal for first-time visitors who want a mix of history, architecture, food, and culture. We can help coordinate stays and transfers between the cities for a comfortable trip."]
            }
        />
    );
}
