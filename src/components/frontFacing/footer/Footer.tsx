import React from "react";
import { FooterEmail, FooterSocials, FooterVision } from "@components/frontFacing";


export default function Footer(){
  return (
    <footer className="bg-black mt-14 p-3">
      <div className="flex gap-3 flex-wrap flex-col md:flex-row">
        <FooterVision />
        <FooterSocials />
        <FooterEmail />
      </div>
    </footer>
  );
};
