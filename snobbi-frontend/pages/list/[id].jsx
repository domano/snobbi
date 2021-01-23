import {RecommendationTile} from "../components/RecommendationTile";

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_CMS_BASE_URL}/recommendation-lists`)
    const recommendations = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = recommendations.map((recommendation) => ({
        params: {id: recommendation.id.toString()},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_CMS_BASE_URL}/recommendation-lists/${params.id}`)
    const recommendation = await res.json()

    recommendation.Simple.Image.src = `http://${process.env.NEXT_PUBLIC_CMS_BASE_URL}${recommendation.Simple.Image.url}`
    // Pass post data to the page via props
    return {props: recommendation}
}

export default function List(props) {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        {props.Title}
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        {props.Description}
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {props.recommendations.map((r) => <RecommendationTile key={r.id} recommendation={r}/>)}
                </div>
            </div>
        </div>
    )
}

