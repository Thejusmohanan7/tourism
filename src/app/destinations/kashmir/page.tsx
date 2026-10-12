import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "kashmir",
    name: "Kashmir",
    description: "Kashmir holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Kashmir() {
    return (
        <DestinationLayout
            slug="kashmir"
            name="Kashmir"
            caption="Paradise in the Himalayas"
            quote="Alpine views, calm lakes, and unforgettable valleys."
            about={
                ["Kashmir is famed for its mountain scenery, serene lakes, gardens, and traditional houseboats. Enjoy a shikara ride on Dal Lake, explore Srinagar's Mughal gardens, and discover the meadows and mountain views of destinations such as Gulmarg and Pahalgam.", "Choose from scenic drives, nature experiences, local markets, and peaceful stays. We can help arrange accommodation and transfers for a memorable Kashmir holiday."]
            }
        />
    );
}
