import Head from "next/head";
import Link from "next/link";

export default function SignUpSuccess() {
    return (
        <>
            <Head>
                <title>SignUp Success</title>
            </Head>
            <main className="bg-black/10 inset-0 fixed flex items-center justify-center">
                <div className="max-w-xs bg-white p-3 rounded-lg flex flex-col">
                    <h1 className="text-2xl font-bold text-green-500">Success</h1>
                    <p>You can contact the admin to become a staff or {""}
                        <Link className="text-blue-700 underline hover:text-green-600/90 transition" href="/">Go Home</Link>
                    </p>
                </div>
            </main>
        </>
    );
};
