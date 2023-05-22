import React from "react";
import { motion } from "framer-motion";
import { ApolloError } from "@apollo/client";

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

interface SimpleGQLError {
    message?: string;
}


export default function FormErrors(props: AuthErrorsProps) {
    const { errors } = props;
    const [nonField, setNonField] = React.useState<NonFieldErrors>();
    const [gqlErrors, setGqlErrors] = React.useState<SimpleGQLError[]>();
    const [apolloError, setApolloError] = React.useState<ApolloError>();
    const [errorStr, setErrorStr] = React.useState<string>();

    React.useEffect(() => {
        if (errors.nonFieldErrors !== undefined && Array.isArray(errors.nonFieldErrors)) {
            if (errors satisfies NonFieldErrors) setNonField(errors as NonFieldErrors)
        } else if (errors.name && errors.name == "ApolloError" && errors satisfies ApolloError) {
            setApolloError(errors)
        } else if (errors satisfies string) {
            setErrorStr(errors)
        } else if (errors satisfies SimpleGQLError) {
            setGqlErrors(errors as SimpleGQLError[])
        };
    }, [errors, setNonField])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-400/30 border border-red-400 p-3 rounded-md">
            <ul>
                {nonField && nonField.nonFieldErrors.map(error => (
                    <li className="list-none text-red-700" key={error.code}>{error.message}</li>
                ))}
                {(gqlErrors && gqlErrors.map) && gqlErrors.map(error => (
                    <li className="list-none text-red-700" key={Math.random()}>{error.message}</li>
                ))}
                {apolloError && apolloError.graphQLErrors.map(error => (
                    <li className="list-none text-red-700" key={Math.random()}>{error.message}</li>
                ))}
                {errorStr && <li className="list-none text-red-700" key={Math.random()}>{errorStr}</li>}
            </ul>
        </motion.div>
    )
}
