import { PInput, FormErrors, PageLoadingRing, TextInput, UIButton, FullLogo } from "@components/common";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import React from "react";
import Link from "next/link";
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
        if (data.auth.user.isStaff) {
            authenticateUser(data.auth, dispatch).then(() => {
                    router.replace("/admin/dashboard")
                    }
                )
        } else {
            setErrors("Your do not have staff privilages")
            setLoading(false);
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center">
      {loading && <PageLoadingRing />}
      <div className="max-w-sm">
        <FullLogo />
      </div>
      <form
        onSubmit={loginHandler}
        className="p-7 py-10 bg-white flex gap-3 max-w-md shadow-lg rounded-lg flex-col">
        <fieldset className="justify-center w-full gap-3 flex flex-col">
          <legend className="text-3xl font-extrabold">Welcome Back...</legend>
          <div className="flex flex-col mt-4 gap-2 text-black/70">
            {errors && <FormErrors errors={errors} />}
            <TextInput ref={emailRef} required placeholder="user@email.com"
              title="Your email address" type="email"/>
            <PInput ref={passwdRef} required placeholder="password"
              className="placeholder:font-semibold text-lg" title="Enter your password"/>
          </div>
        </fieldset>
        <div className="flex items-center justify-between">
          <UIButton className="flex items-center flex-row-reverse gap-2"
              variant="Black" disabled={loading ? true : false} title="Dive in"
            type="submit" icon={HiOutlineArrowNarrowRight}>Login</UIButton>
          <Link className="text-indigo-700" href="#">forgot password?</Link>
        </div>
      </form>
    </div>
  )
};
