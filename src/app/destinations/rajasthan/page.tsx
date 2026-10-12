import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "rajasthan",
    name: "Rajasthan",
    description: "Rajasthan holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Rajasthan() {
    return (
        <DestinationLayout
            slug="rajasthan"
            name="Rajasthan"
            caption="Royal India and Desert Horizons"
            quote="Palaces, forts, and stories around every corner."
            about={
                ["Rajasthan is celebrated for its grand forts, royal palaces, desert landscapes, and colourful traditions. Explore Jaipur's architectural landmarks, Udaipur's lakeside views, Jodhpur's blue streets, and Jaisalmer's golden sandstone fort.", "From heritage stays and cultural experiences to desert excursions and local markets, Rajasthan offers a rich travel experience. We can help arrange accommodation and transfers for your journey."]
            }
        />
    );
}
