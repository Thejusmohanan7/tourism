import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "kerala",
    name: "Kerala",
    description: "Kerala holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Kerala() {
    return (
        <DestinationLayout
            slug="kerala"
            name="Kerala"
            caption="God's Own Country"
            quote="Backwaters, green hills, and a beautiful coastline."
            about={
                ["Kerala is known for its tranquil backwaters, tea-covered hills, tropical beaches, and rich cultural traditions. Enjoy a houseboat cruise in Alappuzha, explore Munnar's tea plantations, discover Fort Kochi's heritage streets, or relax along the coast.", "From family holidays and romantic escapes to wildlife, wellness, and cultural experiences, Kerala offers something for every traveller. We can help arrange stays and transfers for a memorable trip."]
            }
        />
    );
}
