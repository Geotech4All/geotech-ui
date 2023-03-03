import { socialMedia } from "@constants/frontFacing";
import React from "react";
import FooterSocialLink from "./FooterSocialLink";


export default function FooterSocials(){
  return (
    <div className="flex-1 p-3 text-white flex flex-col gap-3">
      <h4 className={`
          text-xl text-white/40 font-semibold`}
        title="Socials">Follow us</h4>
      <div className="h-[1px] bg-white/30"/>
      <ul className="flex flex-col gap-1">
        {socialMedia.map(social => <FooterSocialLink key={Math.random()} social={social} />)}
      </ul>
    </div>
  );
};
