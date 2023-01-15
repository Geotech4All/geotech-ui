import { Button, MModal } from "@components/common";
import { useRouter } from "next/router";
import React from "react";

export default function LoginAgainPrompt(){
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  
  function handleClose (){
    setOpen(true);
  }

  const goToLogin = () => router.replace("/admin/signin")
  const goHome = () => router.push("/")
  return (
    <MModal title="Signature Expired" open={open} onClose={handleClose}>
      <div className="flex flex-col gap-2 w-fit bg-white text-xl">
        <p className="w-fit">It seems your session has expired</p>
        <div className="flex gap-3">
          <Button
            type="button"
            onClick={goToLogin}
            className="bg-green-400 border border-green-600 outline-none outline-0 transition-all hover:bg-green-600 p-1 px-3 hover:text-white rounded-md">Login</Button>
          <Button
            type="button"
            onClick={goHome}
            className="bg-red-400 border border-red-600 outline-0 transition-all hover:bg-red-600 p-1 px-3 hover:text-white rounded-md">Home</Button>
        </div>
      </div>
    </MModal>
  );
};
