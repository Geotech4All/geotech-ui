import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { DialogPropsType } from "@components/common";

/**
 * A Medium sized Modal(Dialog) component
 */
export default function MModal(props: DialogPropsType){
  const { open, onClose, title, description, children } = props;
  return (
    <AnimatePresence>
      <Dialog
        key={Math.random()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        as={motion.div}
        className="z-[1000]"
        open={open} onClose={onClose} >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={Math.random()}
            exit={{ opacity: 0 }}
            className="fixed items-celter flex flex-col inset-0 bg-black/20" aria-hidden="true" />
        </AnimatePresence>
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center ">
          <div className="flex items-center  w-full justify-center p-4">
            <AnimatePresence>
              <Dialog.Panel
                key={Math.random()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                as={motion.div}
                className="flex flex-col items-center gap-3 z-20 w-full max-w-3xl  rounded bg-white p-4">
                {title && (
                  <Dialog.Title className="text-red-500 font-semibold text-2xl">
                    {title}
                  </Dialog.Title>)}
                { description && <Dialog.Description>{description}</Dialog.Description>}
                <div className="z-[300]">{children}</div>
              </Dialog.Panel>
            </AnimatePresence>
          </div>
        </div>
      </Dialog>
    </AnimatePresence>
  );
};
