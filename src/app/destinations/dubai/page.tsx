import DestinationLayout, { destinationMetadata } from '../../components/DestinationLayout';

export const metadata = destinationMetadata({
    slug: "dubai",
    name: "Dubai",
    description: "Dubai holiday packages, travel highlights, and memorable experiences. Plan your trip with us.",
});

export default function Dubai() {
    return (
        <DestinationLayout
            slug="dubai"
            name="Dubai"
            caption="Where Dreams Meet the Desert"
            quote="A modern skyline with a taste for adventure."
            about={
                ["Dubai is known for its striking architecture, luxury shopping, desert landscapes, and waterfront experiences. See the Burj Khalifa, explore traditional souks, enjoy the Dubai Marina, and experience a desert safari beyond the city.", "From family attractions and shopping to fine dining and desert adventures, Dubai offers a memorable holiday for different travel styles. We can help organise accommodation and transfers for your stay."]
            }
        />
    );
}
