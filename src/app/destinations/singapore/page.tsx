import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "singapore",
    name: "Singapore",
    description: "Singapore holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Singapore() {
    return (
        <DestinationLayout
            slug="singapore"
            name="Singapore"
            caption="A City of Wonders"
            quote="Big experiences in a beautifully compact city."
            about={
                ["Singapore is a vibrant destination known for its striking skyline, waterfront attractions, green spaces, and diverse food scene. Visit Gardens by the Bay, enjoy Marina Bay views, explore Sentosa, and discover the city's cultural districts.", "With convenient transport, family attractions, shopping, and memorable dining experiences, Singapore is ideal for couples, families, and first-time international travellers. We can help organise accommodation and transfers for your visit."]
            }
        />
    );
}
