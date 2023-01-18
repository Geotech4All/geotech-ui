import React from "react";
import { Button, FInput, FormErrors, GInput, GTextArea, IInput, PageLoadingHalo } from "@components/common";
import { SelectGuests, SelectHosts } from "@components/admin";
import { useCreatePodcast } from "@gql/requests/mutations/hooks";
import { useNewPodcastsRefs } from "@constants/hooks";

interface NewPodcastFormProps {
  onCreated?: () => void;
}

export default function NewPodcastForm (props: NewPodcastFormProps){
  const { onCreated } = props;
  const [hosts, setHosts] = React.useState<Array<string>>();
  const [guests, setGuests] = React.useState<Array<number>>();
  const [audio, setAudio] = React.useState<File>();
  const [coverPhoto, setCoverPhoto] = React.useState<File>();
  const [createPodcast, { loading, error }] = useCreatePodcast();
  const podRefs = useNewPodcastsRefs();

  const getHosts = (hosts: Array<number>) => setHosts(hosts.map(String));
  const getGuests = (guests: Array<number>) => setGuests(guests);
  const getAudio = (audio?: File) => setAudio(audio);
  const getCoverPhoto = (coverPhoto?: File) => setCoverPhoto(coverPhoto);

  React.useEffect(() => {
    console.log(error)
  }, [error])


  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    createPodcast({
      variables: {
        hostIds: hosts ?? [],
        title: podRefs.titleRef.current.value ?? "",
        description: podRefs.descRef.current.value ?? "",
        guestIds: guests?.map(String),
        audio,
        coverPhoto
      }
    })
    .then(() => {
      if (onCreated) onCreated()
    })
    .catch(err => console.log(err))
  };

  return (
    <form onSubmit={submitHandler} className="w-full p-2 flex flex-col gap-3">
      {error && <FormErrors errors={error.graphQLErrors} />}
      <fieldset>
        <legend className="text-3xl text-red-300 mb-3 font-extrabold">New Podcast</legend>
        <GInput 
          ref={podRefs.titleRef}
          placeholder="Your podcast title goes here....."
          title="Podcast title"
          required
          classNameI="bg-red-500 text-white rounded-lg focus:shadow-lg transition-all outline-none w-full placeholder:text-white/80 font-extrabold text-xl md:text-4xl p-2 md:p-3 md:py-6 py-3"/>     
        <GTextArea
          ref={podRefs.descRef}
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
        <div className="flex flex-col gap-3 md:flex-row w-full">
          <div className="flex-1">
            <label
              className="before:content-['\2022'] flex before:text-lg font-semibold text-black/60 items-center before:text-red-500 gap-1">Podcast</label>
            <FInput
              getFile={getAudio}
              valid="audio"
              accept="audio/*"
              name="podcast" />
          </div>
          <div className="flex-1">
            <label
              className="before:content-['\2022'] flex before:text-lg font-semibold text-black/60 items-center before:text-red-500 gap-1">Cover photo</label>
            <IInput getFile={getCoverPhoto} name="cover-photo"/>
          </div>
        </div>
      </fieldset>
      <Button
        type="submit"
        className={`
          bg-red-500 text-white font-semibold transition-all
          hover:bg-red-600 active:bg-red-600
          text-lg p-1 rounded-2xl`}>Upload podcast</Button>
      {loading && <PageLoadingHalo />}
    </form>
  );
};
