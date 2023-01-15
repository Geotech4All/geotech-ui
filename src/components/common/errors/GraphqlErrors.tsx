import React from "react";
import { motion } from "framer-motion";
import { GraphQLErrors } from "@apollo/client/errors";

interface GraphqlErrorProps {
  errors: GraphQLErrors; 
};
export default function GraphqlErrors(props: GraphqlErrorProps){
  const { errors } = props;
  return (
    <ul>
      {errors.map(error => (
        <motion.div
          className="text-2xl text-red-500 font-semibold mt-3"
          key={error.name}>
          <p>{error.message}</p>
        </motion.div>
      ))}
    </ul>
  )
};
