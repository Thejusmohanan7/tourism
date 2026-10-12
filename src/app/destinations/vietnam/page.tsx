import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "vietnam",
    name: "Vietnam",
    description: "Vietnam holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Vietnam() {
    return (
        <DestinationLayout
            slug="vietnam"
            name="Vietnam"
            caption="A Journey Through Timeless Charm"
            quote="Where vibrant streets meet peaceful landscapes."
            about={
                ["Vietnam offers a beautiful mix of dramatic limestone bays, historic towns, lush countryside, and vibrant city life. Discover the lantern-lit streets of Hoi An, cruise among the limestone karsts of Ha Long Bay, explore Hanoi's Old Quarter, and experience the energy of Ho Chi Minh City.", "Enjoy local cuisine, scenic boat rides, cultural landmarks, and relaxing coastal escapes. Whether you're planning a family holiday, a couple's getaway, or an adventure with friends, we can help arrange stays and transfers for a memorable Vietnam trip."]
            }
        />
    );
}
