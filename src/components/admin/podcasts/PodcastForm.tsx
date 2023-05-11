import React from "react";
import { Button, FInput, FormErrors, AnimatedCheckMark, GInput, GTextArea, IInput, PageLoadingHalo, CenterSLoadingRing } from "@components/common";
import { SelectGuests, SelectHosts } from "@components/admin";
import { useCreateUpdatePodcast } from "@gql/requests/mutations/hooks";
import { useNewPodcastsRefs } from "@constants/hooks";
import { Maybe, PodcastType } from "@gql/codegen/graphql";
import { useRecentHosts } from "@gql/requests/queries/hooks";
import { useAppDispatch } from "@store/hooks";
import { setRecentHosts } from "@store/slices";

interface NewPodcastFormProps {
  onCreated?: () => void;
  podcast?: Maybe<PodcastType>;
  edit?: boolean;
}

export default function PodcastForm (props: NewPodcastFormProps){
  const { onCreated, podcast, edit } = props;
  const { loading: hLoading, data: hData } = useRecentHosts();
  const [creationComplete, setCreationComplete] = React.useState(false)
  const [hosts, setHosts] = React.useState<Array<string>>();
  const [guests, setGuests] = React.useState<Array<number>>();
  const [audio, setAudio] = React.useState<File>();
  const [coverPhoto, setCoverPhoto] = React.useState<File>();
  const [createUpdatePodcast, { loading, error }] = useCreateUpdatePodcast();
  const podRefs = useNewPodcastsRefs();

  const dispatch = useAppDispatch();

  const getHosts = (hosts: Array<number>) => setHosts(hosts.map(String));
  const getGuests = (guests: Array<number>) => setGuests(guests);
  const getAudio = (audio?: File) => setAudio(audio);
  const getCoverPhoto = (coverPhoto?: File) => setCoverPhoto(coverPhoto);

  React.useEffect(function(){
    if (hData) dispatch(setRecentHosts(hData.hosts))
    }, [hData, dispatch])

  if (hLoading) return <CenterSLoadingRing />

  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    createUpdatePodcast({
      variables: {
        podcastId: podcast?.podcastId,
        hostIds: hosts ?? [],
        title: podRefs.titleRef.current.value ?? "",
        description: podRefs.descRef.current.value ?? "",
        guestIds: guests?.map(String),
        audio,
        coverPhoto
      }
    })
    .then(() => {
      setCreationComplete(true);
      const timeout = setTimeout(() => {if (onCreated) onCreated()}, 3000);
      return () => clearTimeout(timeout);
    })
    .catch(err => console.log(err))
  };

  if (creationComplete) return <AnimatedCheckMark />


  return (
    <form onSubmit={submitHandler} className="w-full p-2 flex flex-col gap-3">
      {error && <FormErrors errors={error.graphQLErrors} />}
      <fieldset>
        <legend className="text-3xl text-red-300 mb-3 font-extrabold">{edit ? "Edit" : "New"} Podcast</legend>
        <GInput 
          ref={podRefs.titleRef} placeholder="Your podcast title goes here....."
          title="Podcast title" defaultValue={podcast?.title} required />     
        <GTextArea
          ref={podRefs.descRef}
          rows={5}
          defaultValue={podcast?.description}
          label=" Description"
          classNameL="before:content-['\2022'] text-black/60 font-semibold before:text-lg before:text-red-500"
          title="Podcast description"
          classNameI="w-full outline-none p-2 text-lg focus:shadow-lg transition-all md:text-xl py-5 border rounded-lg"
          placeholder="Your description for this podcast goes here...."/>
        <div className="flex flex-col gap-2 md:flex-row w-full">
          <SelectHosts currentHosts={podcast?.hosts?.map(host => host?.user?.id)} getSelected={getHosts} className="flex-1"/>
          <SelectGuests getSelected={getGuests} className="flex-1"/>
        </div>
        <div className="flex flex-col gap-3 md:flex-row w-full">
          <div className="flex-1">
            <label
              className="before:content-['\2022'] flex before:text-lg font-semibold text-black/60 items-center before:text-red-500 gap-1">Podcast</label>
            <FInput
              defaultFile={podcast?.audio?.toString().split("/").pop()}
              getFile={getAudio}
              valid="audio"
              accept="audio/*"
              name="podcast" />
          </div>
          <div className="flex-1">
            <label
              className="before:content-['\2022'] flex before:text-lg font-semibold text-black/60 items-center before:text-red-500 gap-1">Cover photo</label>
            <IInput defaultImage={"/images/listening-geo-tech.svg"} getFile={getCoverPhoto} name="cover-photo"/>
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
