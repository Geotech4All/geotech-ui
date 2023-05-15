import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRegister } from "@gql/requests/mutations/hooks";
import { FormErrors, FullLogo, LoadingSuccess, PageLoadingRing, PInput, TextInput, UIButton } from "@components/common";
import { useRouter } from "next/router";

export default function SignUpForm() {
    const [mutate, { loading, error, data }] = useRegister();
    const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const pass1Ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const pass2Ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const router = useRouter();

    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();
        const res = await mutate({variables: {
            email: emailRef.current.value,
            password1: pass1Ref.current.value,
            password2: pass2Ref.current.value
        }})
        if (res.data?.register?.success) {
            const timeout = setTimeout(() => {
                router.replace("/signup/success");
                clearTimeout(timeout);
            }, 1000)
        }
    }

    return (
    <div className="flex flex-col gap-7 items-center justify-center">
        {loading && <PageLoadingRing />}
        <div className="max-w-sm">
            <FullLogo />
        </div>
        <form onSubmit={handleSubmit}
            className="p-7 py-10 bg-white flex gap-3 max-w-md shadow-lg rounded-lg flex-col">
            <fieldset className="justify-center w-full gap-3 flex flex-col">
                <legend className="text-3xl font-extrabold">Join us</legend>
                <div className="flex flex-col mt-4 gap-2 text-black/70">
                    {error && <FormErrors errors={error} />}
                    <TextInput ref={emailRef} required placeholder="user@email.com"
                      title="Your email address" type="email"/>
                    <PInput ref={pass1Ref} required placeholder="Password" title="Enter your password"/>
                    <PInput ref={pass2Ref} required placeholder="Confirm password" title="Confirm password"/>
                </div>
            </fieldset>
            <UIButton className="flex items-center self-end flex-row-reverse gap-2"
                variant="Black" disabled={loading ? true : false} title="Dive in"
                type="submit" icon={HiOutlineArrowNarrowRight}>SignUp</UIButton>
        </form>
        { data?.register?.success && <LoadingSuccess /> }
    </div>
    );
};
