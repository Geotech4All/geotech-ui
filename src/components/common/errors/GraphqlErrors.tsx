import React from "react";
import { motion } from "framer-motion";
import { GraphQLErrors } from "@apollo/client/errors";
import { LoginAgainPrompt } from "@components/auth";

interface GraphqlErrorProps {
  errors: GraphQLErrors; 
};

export default function GraphqlErrors(props: GraphqlErrorProps){
  const { errors } = props;
  const [sigExpired, setSigExpired] = React.useState(false);
  React.useEffect(() => {
    for (const error of errors) {
      if (error.message === "Signature has expired") {
        setSigExpired(true);
      }
    }
  }, [errors, setSigExpired])
  return (
    <ul>
      {errors.map(error => (
        <motion.div
          className="text-2xl text-red-500 font-semibold mt-3"
          key={Math.random()}>
          <p>{error.message}</p>
        </motion.div>
      ))}
      {sigExpired && <LoginAgainPrompt />}
    </ul>
  )
};
