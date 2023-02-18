import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorProps, GraphqlErrors } from "@components/common";

export default function PopupError(props: ErrorProps){
  const { error } = props;
  const [showing, setShowing] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(()=> setShowing(false), 5000)
    return () => clearTimeout(timeout);
  }, [])

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 bottom-4">
    <AnimatePresence>
      {showing && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          key={Math.random()}>
          <div>
            {error.networkError &&(
              <p className={`bg-red-600/10 p-0.5 px-2 border border-red-500/50 rounded-md`}>{error.networkError?.message}</p>)}
            {error.graphQLErrors && <GraphqlErrors errors={error.graphQLErrors} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
};
