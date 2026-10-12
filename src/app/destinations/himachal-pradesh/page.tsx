import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    description: "Himachal Pradesh holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function HimachalPradesh() {
    return (
        <DestinationLayout
            slug="himachal-pradesh"
            name="Himachal Pradesh"
            caption="Mountain Air and Scenic Retreats"
            quote="Slow down among pine forests and peaks."
            about={
                ["Himachal Pradesh offers pine-covered hills, mountain villages, river valleys, and charming hill stations. Explore Shimla's colonial-era streets, enjoy Manali's mountain scenery, or discover the peaceful landscapes of Dharamshala and nearby valleys.", "From family holidays and scenic drives to nature walks and adventure activities, Himachal has something for many travellers. We can help arrange stays and transfers for a relaxing mountain getaway."]
            }
        />
    );
}
