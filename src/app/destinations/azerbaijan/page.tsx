import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "azerbaijan",
    name: "Azerbaijan",
    description: "Azerbaijan holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Azerbaijan() {
    return (
        <DestinationLayout
            slug="azerbaijan"
            name="Azerbaijan"
            caption="Land of Fire"
            quote="Ancient stories meet striking modern design."
            about={
                ["Azerbaijan blends modern architecture, Caspian Sea views, and historic Silk Road heritage. Explore Baku's waterfront boulevard and Old City, admire the Flame Towers, and discover the country's distinctive landscapes beyond the capital.", "From city sightseeing and cultural experiences to mountain excursions and local cuisine, Azerbaijan offers a varied getaway. We can help plan your accommodation and transfers for a comfortable trip."]
            }
        />
    );
}
