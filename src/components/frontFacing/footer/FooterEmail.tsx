import { GInput, GTextArea, UIButton } from "@components/common";
import React from "react";


export default function FooterEmail(){
  return (
    <form className="bg-white/10 sm:min-w-[30rem] p-2 flex flex-col flex-1 gap-5 rounded">
      <div className="flex justify-between text-white">
        <legend className="font-semibold text-2xl text-white/70">Email us</legend>
        <UIButton variant="White" disabled type="submit">Send</UIButton>
      </div>
      <div className="flex flex-col gap-4">
        <GInput
          classNameW={`bg-white/30 p-2 rounded`}
          classNameI={`bg-transparent w-full text-white`}
          type="email" placeholder="Your email address (example@gmail.com)"/>
        <GTextArea
          classNameW={`bg-white/30 p-2 rounded`}
          classNameI={`bg-transparent w-full text-white`}
          rows={8} placeholder="Your message"/>
      </div>
    </form>
  );
};
