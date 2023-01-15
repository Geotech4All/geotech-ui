import React from "react";
import { SLoadingRing } from "@components/common";

export default function PageLoadingRing(){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-50/30">
      <SLoadingRing />
    </div>
  )
};
