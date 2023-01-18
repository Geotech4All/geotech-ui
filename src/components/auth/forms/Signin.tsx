import { LInput, PInput, Button, FormErrors, PageLoadingRing } from "@components/common";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthRefs } from "@constants/hooks";
import { login } from "@api/login";
import { authenticateUser } from "@utils/auth";
import { useAppDispatch } from "@store/hooks";

export default function SigninForm() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { emailRef, passwdRef } = useAuthRefs();
  const [errors, setErrors] = React.useState<any>();
  const dispatch = useAppDispatch();

  const loginHandler: React.FormEventHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwdRef.current.value;
    if (email && password) {
      const data = await login(email, password).then(res => {
        setErrors(res.errors);
        return res.data;
      })
      if (data?.auth?.errors) {
        setLoading(false);
        setErrors(data?.auth?.errors);
      }
      if (data?.auth?.user){
        authenticateUser(data.auth, dispatch).then(() => {
          router.replace("/admin/dashboard")
        })
      }
    }
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center">
      {loading && <PageLoadingRing />}
      <div className="max-w-sm">
        <Image
          className="w-full object-cover"
          src="/images/gtech.png" width={1030} height={220} alt="geotech" />
      </div>
      <form
        onSubmit={loginHandler}
        className="p-7 py-10 bg-white flex gap-3 max-w-md shadow-lg rounded-lg flex-col text-red-500">
        <fieldset className="justify-center w-full gap-3 flex flex-col">
          <legend className="text-3xl font-extrabold">Welcome Back...</legend>
          <div className="flex flex-col mt-4 gap-2 text-black/70">
            {errors && <FormErrors errors={errors} />}
            <LInput
              ref={emailRef}
              className="placeholder:font-semibold text-lg"
              required placeholder="user@email.com"
              title="Your email address" type="email"/>
            <PInput
              ref={passwdRef}
              className="placeholder:font-semibold text-lg"
              required placeholder="password"
              title="Enter your password"/>
          </div>
        </fieldset>
        <div className="flex items-center justify-between">
          <Button
            disabled={loading ? true : false}
            title="Dive in"
            className="flex disabled:bg-red-300 items-center duration-300 bg-red-500 hover:gap-5 font-bold text-lg p-2 transition-all px-4 hover:bg-red-600 w-fit rounded-md text-white flex-row-reverse gap-3"
            type="submit" icon={HiOutlineArrowNarrowRight}>Login</Button>
          <Link className="text-indigo-700" href="#">forgot password?</Link>
        </div>
      </form>
    </div>
  )
};
