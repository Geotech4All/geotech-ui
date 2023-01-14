import { GraphQLErrors } from "@apollo/client/errors";
import React from "react";

interface GraphqlErrorProps {
  errors: GraphQLErrors; 
};
export default function GraphqlErrors(props: GraphqlErrorProps){
  const { errors } = props;
  return (
    <ul>
      {errors.map(error => <p key={error.name}>{error.message}</p>)}
    </ul>
  )
};
