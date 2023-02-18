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
    <ul className={`bg-red-600/10 p-0.5 mt-3 flex flex-col gap-2 rounded-md px-2 border border-red-500/40`}>
      {errors.map(error => (
        <motion.div
          className="text-lg text-red-500"
          key={Math.random()}>
          <p>{error.message}</p>
        </motion.div>
      ))}
      {sigExpired && <LoginAgainPrompt />}
    </ul>
  )
};
