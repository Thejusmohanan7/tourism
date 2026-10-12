import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "thailand",
    name: "Thailand",
    description: "Thailand holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Thailand() {
    return (
        <DestinationLayout
            slug="thailand"
            name="Thailand"
            caption="Land of Smiles"
            quote="From lively cities to peaceful tropical beaches."
            about={
                ["Thailand offers a colourful mix of temples, bustling markets, tropical islands, and rich food traditions. Explore Bangkok's lively streets, enjoy the beaches of Phuket and Krabi, or discover the relaxed atmosphere of Chiang Mai.", "Whether you are looking for island adventures, cultural sightseeing, shopping, or a relaxing family holiday, Thailand has plenty to explore. We help arrange stays and transfers for a comfortable trip."]
            }
        />
    );
}
