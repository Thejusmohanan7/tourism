import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "goa",
    name: "Goa",
    description: "Goa holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Goa() {
    return (
        <DestinationLayout
            slug="goa"
            name="Goa"
            caption="Sun, Sand and Easygoing Days"
            quote="Let the coast set the pace of your holiday."
            about={
                ["Goa offers a lively blend of beaches, Portuguese-influenced heritage, colourful markets, and coastal cuisine. Explore Old Goa's churches, enjoy the beaches of North and South Goa, and discover local cafés and sunset viewpoints.", "Whether you prefer a relaxed beach break, sightseeing, family time, or exploring local culture, Goa offers plenty of ways to enjoy your holiday. We can help arrange accommodation and transfers for your stay."]
            }
        />
    );
}
