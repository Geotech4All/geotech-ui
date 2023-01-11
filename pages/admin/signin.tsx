import { SigninForm, LoginLayout } from "@components/auth";
import Head from "next/head";
import React from "react";

export default function Signin() {
  return (
    <>
      <Head>
        <meta content="Login to GeoTech / GeoTech" property="og:title" />
      </Head>
      <div>
        <LoginLayout>
          <SigninForm />
        </LoginLayout>
      </div>
    </>
  );
}
