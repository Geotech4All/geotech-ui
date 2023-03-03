import { Button, GInput, GTextArea } from "@components/common";
import React from "react";


export default function FooterEmail(){
  return (
    <form className="bg-indigo-900/10 sm:min-w-[30rem] p-2 flex flex-col flex-1 gap-5 rounded-lg">
      <div className="flex justify-between text-white">
        <legend className="font-semibold text-2xl text-white/70">Email us</legend>
        <Button
          disabled
          type="submit"
          className="disabled:opacity-60 bg-indigo-600 p-1 px-3 rounded-md">Send</Button>
      </div>
      <div className="flex flex-col gap-4">
        <GInput
          classNameW={`bg-indigo-900/60 p-2 rounded-lg`}
          classNameI={`bg-transparent w-full text-white`}
          type="email" placeholder="Your email address (example@gmail.com)"/>
        <GTextArea
          classNameW={`bg-indigo-900/60 p-2 rounded-lg`}
          classNameI={`bg-transparent w-full text-white`}
          rows={8} placeholder="Your message"/>
      </div>
    </form>
  );
};
