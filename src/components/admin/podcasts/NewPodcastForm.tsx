import React from "react";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { FInput, GInput, GTextArea } from "@components/common";
import { SelectGuests, SelectHosts } from "@components/admin";

export default function NewPodcastForm (){
  const [hosts, setHosts] = React.useState<Array<number>>();
  const [guests, setGuests] = React.useState<Array<number>>();
  const getHosts = (hosts: Array<number>) => setHosts(hosts);
  const getGuests = (guests: Array<number>) => setGuests(guests);

  React.useEffect(() => {
  }, [hosts])
  return (
    <form className="w-full p-2 flex flex-col gap-3">
      <GInput 
        placeholder="Your podcast title goes here....."
        title="Podcast title"
        required
        classNameI="bg-red-500 text-white rounded-lg focus:shadow-lg transition-all outline-none w-full placeholder:text-white/80 font-extrabold text-xl md:text-4xl p-2 md:p-3 md:py-6 py-3"/>     
      <GTextArea
        rows={5}
        label=" Description"
        classNameL="before:content-['\2022'] text-black/60 font-semibold before:text-lg before:text-red-500"
        title="Podcast description"
        classNameI="w-full outline-none p-2 text-lg focus:shadow-lg transition-all md:text-xl py-5 border rounded-lg"
        placeholder="Your description for this podcast goes here...."/>
      <div className="flex flex-col gap-2 md:flex-row w-full">
        <SelectHosts getSelected={getHosts} className="flex-1"/>
        <SelectGuests getSelected={getGuests} className="flex-1"/>
      </div>
      <div>
        <label className="before:content-['\2022'] flex before:text-lg font-semibold text-black/60 items-center before:text-red-500 gap-1">Podcast</label>
        <FInput accept="audio/*" name="podcast">
          <div className="flex flex-col text-black/70 items-center justify-center">
            <span className="text-red-400"><BsFileEarmarkMusic size={50}/></span>
            <p className="font-bold text-lg">Drag &amp;	drop an audio file</p>
            <p>or <span className="text-red-400">browse </span>to choose a file</p>
          </div>
        </FInput>
      </div>
    </form>
  );
};
