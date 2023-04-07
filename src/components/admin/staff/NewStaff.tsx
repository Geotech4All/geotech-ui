import { AnimatePresence, motion } from "framer-motion";
import { Button, CenterSLoadingRing, GInput, SomethingWentWrong } from "@components/common";
import { Maybe, StaffType } from "@gql/codegen/graphql";
import { useCreateStaff } from "@gql/requests/mutations/hooks";
import React from "react";
import StaffPermissionForm from "./StaffPermissionForm";
import StaffCard from "./StaffCard";


export default function NewStaff() {
  const [newStaff, setNewStaff] = React.useState<Maybe<StaffType>>()
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [createStaff, { loading, error }] = useCreateStaff()

  const handleCreateStaff = () => {
    if (emailRef.current.value) {
      createStaff({ variables: { userEmail: emailRef.current.value }}).then(res => {
        setNewStaff(res.data?.staff?.staff)
      })
    }
  }


  return (
    <div className="p-3 flex flex-col shadow-lg rounded-lg">
      <h3 className="text-black/60 mb-4 font-semibold pl-6 text-lg">New Staff</h3>
      <AnimatePresence>
        {!newStaff && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            key={Math.random()}
            className="flex relative flex-col gap-3">

            {loading && <CenterSLoadingRing />}
            {error && <SomethingWentWrong error={error} />}
            <GInput
              ref={emailRef}
              label="User email"
              required
              classNameL="bg-ui-red-200/70 p-1 px-2 whitespace-nowrap rounded-md text-white"
              classNameI="p-1 transition px-2 shadow rounded-md w-full focus:shadow-lg"
              classNameW="flex gap-3"
              placeholder="user@email.com"/>
            <Button
              onClick={handleCreateStaff}
              className={`
                self-end bg-ui-red-200/90 p-2 rounded-md text-white font-semibold
                hover:bg-ui-red-200/70 active:bg-ui-red-200/70 transition
            `}>Confirm Email</Button>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {newStaff && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-evenly items-center flex-col md:flex-row gap-5">
            <StaffCard staff={newStaff}/>
            <StaffPermissionForm defaultValue={newStaff}/>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
