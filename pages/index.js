import DefaultLayout from "@/features/Layouts/DefaultLayout";
import HeroBanner from "@/features/Home/components/HeroBanner";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties";

export default function Home({featuredProperties}) {
    return (
        <>
            <DefaultLayout>
                <HeroBanner/>
                <FeaturedProperties featuredProperties={featuredProperties}/>
            </DefaultLayout>
        </>
    )
}

export async function getStaticProps(){
    const {hits} = require('@/features/data/properties')
    return {
        props: { featuredProperties: hits }
    }
}
