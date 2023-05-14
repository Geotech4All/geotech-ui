import React from "react";
import { useNewPodcastsRefs } from "@constants/hooks";
import { FileFoldersEnum, FileType, ImageType, Maybe, PodcastType } from "@gql/codegen/graphql";
import { SelectGuests, SelectHosts } from "@components/admin";
import { useCreateUpdatePodcast } from "@gql/requests/mutations/hooks";
import {
    FormErrors, AnimatedCheckMark, GInput,
    PageLoadingHalo, LabeledTextArea, UIButton,
    DottedLabel, PreviewImage, ImagePicker,
    FileThumbnail, FilePicker
    } from "@components/common";

interface NewPodcastFormProps {
  onCreated?: () => void;
  podcast?: Maybe<PodcastType>;
  edit?: boolean;
}

export default function PodcastForm (props: NewPodcastFormProps){
  const { onCreated, podcast, edit } = props;
  const [hosts, setHosts] = React.useState<Array<string>>();
  const [guests, setGuests] = React.useState<Array<string>>();
  const [coverPhoto, setCoverPhoto] = React.useState<ImageType>();
  const [audio, setAudio] = React.useState<FileType>();
  const [showImagePicker, setShowImagePicker] = React.useState(false);
  const [showFilePicker, setShowFilePicker] = React.useState(false);

  const [createUpdatePodcast, { loading, error, data }] = useCreateUpdatePodcast();
  const podRefs = useNewPodcastsRefs();


  const getHosts = (hosts: Array<string>) => setHosts(hosts);
  const getGuests = (guests: Array<string>) => setGuests(guests);
  const toggleImagePicker = () => setShowImagePicker(curr => !curr);
  const getCoverPhoto = (coverPhoto: ImageType) => {
      setCoverPhoto(coverPhoto);
      toggleImagePicker();
  }
  const getAudioFile = (audio: FileType) => {
      setAudio(audio)
      toggleFilePicker();
  }

  const toggleFilePicker = () => setShowFilePicker(curr => !curr);


  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    createUpdatePodcast({
      variables: {
        guestIds: guests,
        hostIds: hosts ?? [],
        audioId: audio?.fileId,
        podcastId: podcast?.podcastId,
        coverPhotoId: coverPhoto?.imageId,
        title: podRefs.titleRef.current.value ?? "",
        description: podRefs.descRef.current.value ?? "",
      }
    })
    .then(() => {
      const timeout = setTimeout(() => {
        if (onCreated) onCreated()
        clearTimeout(timeout);
      }, 3000);
    })
    .catch(err => console.log(err))
  };

  if (data?.podcast?.success) return <AnimatedCheckMark />


  return (
    <form onSubmit={submitHandler} className="w-full p-2 flex flex-col gap-3">
      {error && <FormErrors errors={error.graphQLErrors} />}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-xl md:text-2xl text-black/60 mb-3 font-semibold">{edit ? "Edit" : "New"} Podcast</legend>
        <GInput ref={podRefs.titleRef} title="Podcast title" defaultValue={podcast?.title}
            required placeholder="Your podcast title goes here....."/>     
        <LabeledTextArea ref={podRefs.descRef} rows={5} label=" Description"
            title="Podcast description" defaultValue={podcast?.description} 
            placeholder="Your description for this podcast goes here...."/>
        <div className="flex flex-col gap-2 md:flex-row w-full">
          <SelectHosts currentHosts={podcast?.hosts} getSelected={getHosts} className="flex-1"/>
          <SelectGuests currentGuests={podcast?.guests} getSelected={getGuests} className="flex-1"/>
        </div>
        <div className="flex flex-col gap-3 md:flex-row w-full">
          <div className="flex-1 flex flex-col gap-2">
            <DottedLabel>Audio</DottedLabel>
            <FileThumbnail file={audio}/>
            <UIButton type="button" variant="Black"
                onClick={toggleFilePicker}>{audio? "Edit": "Add"} audio</UIButton>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <DottedLabel>Cover photo</DottedLabel>
            <PreviewImage className="border opacity-90 border-black/10"
                src={coverPhoto?.url ?? "/images/listening-geo-tech.svg"}/>
            <UIButton type="button" variant="Black"
                onClick={toggleImagePicker} >{coverPhoto ? "Edit": "Add"} Cover Photo</UIButton>
          </div>
        </div>
      </fieldset>
      <UIButton variant="Black" type="submit">Upload podcast</UIButton>

      {showImagePicker && <ImagePicker onPickImage={getCoverPhoto} onClose={toggleImagePicker}/> }
      {showFilePicker && <FilePicker fileFolder={FileFoldersEnum.Podcast} onClose={toggleFilePicker} onSelect={getAudioFile}/>}
      {loading && <PageLoadingHalo />}
    </form>
  );
};
