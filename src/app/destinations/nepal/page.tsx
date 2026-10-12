import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "nepal",
    name: "Nepal",
    description: "Nepal holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Nepal() {
    return (
        <DestinationLayout
            slug="nepal"
            name="Nepal"
            caption="Gateway to the Himalayas"
            quote="A land of mountain views and living heritage."
            about={
                ["Nepal offers Himalayan panoramas, ancient temples, lively markets, and peaceful lakeside towns. Explore Kathmandu's heritage sites, enjoy the lakeside atmosphere of Pokhara, or take in mountain views and countryside trails.", "From cultural sightseeing to gentle nature excursions and trekking-focused trips, Nepal has options for many travel styles. We can help arrange accommodation and transfers for your Nepal holiday."]
            }
        />
    );
}
