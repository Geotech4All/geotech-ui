import React from "react";


export default function FooterVision(){
  return (
    <div className="flex-1 text-white flex flex-col gap-4 p-3">
      <div className="flex flex-col gap-3 justify-between">
        <h3 className="capitalize text-white/50 whitespace-nowrap font-semibold text-xl">Our vision</h3>
        <div className="bg-white/25 h-[1px] w-full"/>
      </div>
      <blockquote className="text-3xl text-white/70 ">
        To be a resource center for everything geoscience in Nigeria and Africa
      </blockquote>
    </div>
  );
};
