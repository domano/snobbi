import List from "../../components/List";

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

export default function ListPage(props) {
    return <List {...props}/>
}

