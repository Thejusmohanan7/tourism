import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "varanasi-ayodhya",
    name: "Varanasi Ayodhya",
    description: "Varanasi Ayodhya holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function VaranasiAyodhya() {
    return (
        <DestinationLayout
            slug="varanasi-ayodhya"
            name="Varanasi Ayodhya"
            caption="A Journey of Faith and Heritage"
            quote="Experience two of India's deeply spiritual destinations."
            about={
                ["Varanasi and Ayodhya offer meaningful cultural and spiritual experiences rooted in India's living traditions. In Varanasi, experience the ghats along the Ganges and the evening aarti; in Ayodhya, visit important temples and explore the city's religious heritage.", "A thoughtfully planned itinerary can balance temple visits, local sightseeing, and time for reflection. We can help arrange accommodation and transfers for your journey."]
            }
        />
    );
}
