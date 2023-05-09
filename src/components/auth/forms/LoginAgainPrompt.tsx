import { Button, MModal, UIButton } from "@components/common";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function LoginAgainPrompt(){
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  
  function handleClose (){
    setOpen(true);
  }

  const goToLogin = () => router.replace("/admin/signin")
  const goHome = () => router.push("/admin/signout")
  return (
    <MModal title="Signature Expired" open={open} onClose={handleClose}>
      <div className="flex flex-col items-start gap-2 bg-white sm:text-sm md:text-base">
        <p className="w-fit">It seems your session has expired</p>
        <div className="flex gap-3">
          <UIButton variant="Green" type="button" onClick={goToLogin}>Login</UIButton>
          <UIButton type="button" onClick={goHome}>Logout</UIButton>
        </div>
      </div>
    </MModal>
  );
};
