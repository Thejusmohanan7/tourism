import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "bhutan",
    name: "Bhutan",
    description: "Bhutan holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Bhutan() {
    return (
        <DestinationLayout
            slug="bhutan"
            name="Bhutan"
            caption="The Kingdom in the Clouds"
            quote="A peaceful escape among the Himalayas."
            about={
                ["Bhutan is known for its Himalayan scenery, peaceful valleys, colourful monasteries, and strong cultural traditions. Visit the iconic Tiger's Nest Monastery, explore Thimphu and Paro, and take in views of forested mountains and traditional villages.", "With cultural visits, nature walks, and quiet mountain landscapes, Bhutan is ideal for travellers seeking a slower-paced escape. We can help coordinate stays and transfers in line with your travel plans."]
            }
        />
    );
}
