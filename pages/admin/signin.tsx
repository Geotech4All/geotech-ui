import { SigninForm, AuthFormLayout } from "@components/auth";
import Head from "next/head";
import React from "react";

export default function Signin() {
  return (
    <>
      <Head>
        <title>Signin - Geotech</title>
        <meta content="Login to GeoTech / GeoTech" property="og:title" />
      </Head>
      <div>
        <AuthFormLayout width={1000} height={667} src="/images/scientists.svg">
          <SigninForm />
        </AuthFormLayout>
      </div>
    </>
  );
}
