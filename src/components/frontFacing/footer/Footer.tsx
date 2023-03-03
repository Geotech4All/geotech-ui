import React from "react";
import { FooterEmail, FooterSocials, FooterVision } from "@components/frontFacing";


export default function Footer(){
  return (
    <footer className="bg-gray-900 rounded-t-xl mt-8 p-3">
      <div className="flex gap-3 flex-wrap flex-col md:flex-row">
        <FooterVision />
        <FooterSocials />
        <FooterEmail />
      </div>
    </footer>
  );
};
