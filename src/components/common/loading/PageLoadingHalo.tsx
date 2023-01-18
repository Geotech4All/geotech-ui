import React from "react";
import { SLoadingHalo } from "@components/common";

export default function PageLoadingHalo(){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-50/70">
      <SLoadingHalo />
    </div>
  )
};
