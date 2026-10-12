import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "georgia",
    name: "Georgia",
    description: "Georgia holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Georgia() {
    return (
        <DestinationLayout
            slug="georgia"
            name="Georgia"
            caption="Mountains, Heritage and Hospitality"
            quote="A destination full of character and contrast."
            about={
                ["Georgia welcomes visitors with dramatic Caucasus mountain scenery, historic churches, charming old towns, and a distinctive food culture. Explore Tbilisi's winding streets, discover the mountain landscapes of Kazbegi, and visit the wine region of Kakheti.", "Enjoy scenic drives, cultural landmarks, local cuisine, and outdoor experiences. Whether you prefer a relaxed city break or a mountain adventure, we can help arrange stays and transfers for your Georgia holiday."]
            }
        />
    );
}
