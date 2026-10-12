import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "hyderabad",
    name: "Hyderabad",
    description: "Hyderabad holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Hyderabad() {
    return (
        <DestinationLayout
            slug="hyderabad"
            name="Hyderabad"
            caption="A City of History and Flavour"
            quote="Heritage charm with a modern city pulse."
            about={
                ["Hyderabad combines historic landmarks, lively markets, modern attractions, and a celebrated food culture. Visit the Charminar, explore Golconda Fort, stroll around Hussain Sagar, and discover the city's famous biryani and local specialities.", "With heritage tours, shopping, family attractions, and dining experiences, Hyderabad makes a rewarding city break. We can help arrange accommodation and transfers for your visit."]
            }
        />
    );
}
