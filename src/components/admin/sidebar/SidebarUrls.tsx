import React from "react";
import { adminUrls } from "@constants/adminUrls";
import SidebarUrl from "./SidebarUrl";

export default function SidebarUrls(){
  return (
    <ul className="flex flex-col gap-0.5">
      {adminUrls.map((url, index) => (
        <SidebarUrl key={index} {...url}/>)
      )}
    </ul>
  );
};
