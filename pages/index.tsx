import Head from 'next/head'
import { getMostPopularPosts } from "@api/client";
import { BlogLanding, Hero, NavBarLayout, PodcastLanding } from '@components/frontFacing'
import { dummyPosts } from '@constants/clientContants';
import { usePopularPosts } from '@gql/requests/queries/hooks';
import { PageLoadingRing } from '@components/common';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
    const { loading, data } = usePopularPosts({ first: 4 })

    if (loading) return <PageLoadingRing />;
    const posts = (data?.posts && data.posts.edges.length > 3) ? data.posts : dummyPosts.posts;

    return (
        <>
            <Head>
                <title>GeoTech</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <Hero />
                <PodcastLanding />
                <BlogLanding posts={posts} />
            </main>
        </>
    )
}

Home.getLayout = NavBarLayout;

export default Home;

export async function getStaticProps() {
    const posts = await getMostPopularPosts();
    return {
        props: {
            posts: posts && posts.data.posts?.edges && posts.data.posts?.edges?.length > 4 ? posts.data.posts?.edges : dummyPosts
        }
    }
}
