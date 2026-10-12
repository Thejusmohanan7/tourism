import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: 'bali',
    name: 'Bali',
    description: 'Rice terraces, cliff-top temples and beach clubs. Plan your Bali holiday with us.',
});

export default function Bali() {
    return (
        <DestinationLayout
            slug="bali"
            name="Bali"
            caption="Island of the Gods"
            quote="Where every sunset feels like a celebration."

            about={[
                "Bali is famous for its emerald rice terraces, stunning beaches, and iconic temples. Explore the breathtaking Uluwatu Temple, the sacred Tanah Lot Temple, the lush Tegallalang Rice Terraces, and the beautiful waterfalls around Ubud. From the cultural heart of Ubud to the vibrant beaches of Seminyak, Bali offers unforgettable experiences.",
                "Visit the famous Gates of Heaven at Lempuyang Temple, discover the natural beauty of Mount Batur, or relax along the beaches of Kuta and Nusa Dua. Whether you're planning a romantic honeymoon, a family holiday, or an adventure with friends, we arrange your stays and transfers for a memorable Bali getaway."
            ]}

        />
    );
}