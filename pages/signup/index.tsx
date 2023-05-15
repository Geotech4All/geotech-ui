import { AuthFormLayout, SignUpForm } from "@components/auth";
import Head from "next/head";

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Join Geotech</title>
                <meta content="Join to GeoTech / GeoTech" property="og:title" />
            </Head>
            <main>
                <AuthFormLayout width={1000} height={667} src="/images/scientists.svg">
                    <SignUpForm />
                </AuthFormLayout>
            </main>
        </>
    );
};
