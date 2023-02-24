import DefaultLayout from "@/features/Layouts/DefaultLayout";
import HeroBanner from "@/features/Home/components/HeroBanner";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Partners from "@/features/Home/components/Partners";

export default function Home({featuredProperties}) {
    return (
        <>
            <DefaultLayout>
                <HeroBanner/>
                <FeaturedProperties featuredProperties={featuredProperties}/>
                <MeetTheTeam/>
                <Partners/>
            </DefaultLayout>
        </>
    )
}

export async function getStaticProps(){
    const {hits} = require('@/features/data/properties')
    return {
        props: { featuredProperties: hits.slice(0, 5) }
    }
}
