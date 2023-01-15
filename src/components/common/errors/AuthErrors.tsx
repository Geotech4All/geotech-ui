import React from "react";
import { motion } from "framer-motion";

interface AuthErrorsProps {
  errors: any;
};

interface NonfieldError {
  code: string;
  message: string;
}

interface NonFieldErrors {
  nonFieldErrors: NonfieldError[];
}

export default function AuthErrors(props: AuthErrorsProps){
  const { errors } = props;
  const [nonField, setNonField] = React.useState<NonFieldErrors>();

  React.useEffect(() => {
    if (errors.nonFieldErrors !== undefined && Array.isArray(errors.nonFieldErrors)) {
      setNonField(errors as NonFieldErrors)
    }
  }, [errors, setNonField])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-red-400/30 border border-red-400 p-3 rounded-md">
      {nonField && nonField.nonFieldErrors.map(error => (
        <li className="list-none text-red-700" key={error.code}>{error.message}</li>
      ))}
      <ul></ul>
    </motion.div>
  )
}
