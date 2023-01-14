import React from "react";
import Image from "next/image";
import type { ApolloError } from "@apollo/client";
import { GraphqlErrors } from "@components/common";

interface ErrorProps {
  error: ApolloError;
}
export default function SomethingWentWrong(props: ErrorProps){
  const { error } = props;
  
  return (
    <div className="w-full py-20 p-5">
      <div className="flex flex-col w-full p-10 rounded-2xl shadow-2xl items-center justify-center">
        <div>
          <Image
            width={500}
            height={500}
            src="/images/sorry.svg"
            alt="lady holding a sorry banner"/>
        </div>
        <h1 className="text-red-600 font-extrabold text-2xl md:text-4xl">Something went wrong!</h1>
        <div>
          {error.networkError &&(
            <p className="text-base md:text-2xl text-red-700">{error.networkError?.message}</p>)}
          {error.graphQLErrors && <GraphqlErrors errors={error.graphQLErrors} />}
        </div>
      </div>
    </div>
  );
};
