import { AnimatePresence, motion } from "framer-motion";
import { CenterSLoadingRing, FormErrors, GInput, UIButton } from "@components/common";
import { Maybe, StaffType } from "@gql/codegen/graphql";
import { useCreateStaff } from "@gql/requests/mutations/hooks";
import React from "react";


export default function NewStaff() {
  const [newStaff, setNewStaff] = React.useState<Maybe<StaffType>>()
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [createStaff, { loading, error }] = useCreateStaff()

  const handleCreateStaff = () => {
    if (emailRef.current.value) {
      createStaff({ variables: { userEmail: emailRef.current.value }}).then(res => {
        setNewStaff(res.data?.staff?.staff)
      }).catch()
    }
  }

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
        if (e.key === "Enter") handleCreateStaff()
  }


  return (
    <div className="border border-black/5 p-3 flex flex-col shadow rounded-lg">
      <h3 className="text-black/60 mb-4 font-semibold text-lg">New Staff</h3>
      <AnimatePresence>
        {!newStaff && (
          <motion.section key={Math.random()}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }} className="flex relative flex-col gap-3">
            {loading && <CenterSLoadingRing />}
            {error && <FormErrors errors={error}/>}
            <GInput onKeyDown={handleKeyDown} ref={emailRef} label="User email" required placeholder="user@email.com"/>
            <UIButton variant="Black" onClick={handleCreateStaff}
                className="w-fit self-end p-[0.6rem] px-4">Create Staff</UIButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
