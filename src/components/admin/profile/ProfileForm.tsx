import React from "react";
import { AnimatedCheckMark, Button, GImage, GInput, GTextArea, IInput, PageLoadingHalo, SomethingWentWrong } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/slices";
import { useUpdatePodcast } from "@gql/requests/mutations/hooks";

interface ProfileFormProps {
  onSave?: () => void;
}

export default function ProfileForm(props: ProfileFormProps){
  const { onSave } = props;
  const user = useAppSelector(selectUser);
  const [ updateProfile, { loading, error } ] = useUpdatePodcast();
  const [updateComplete, setUpdateComplete] = React.useState(false);
  const firstNameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const lastNameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [newProfileImage, setNewProfileImage] = React.useState<File>();

  const getImage = (image?: File) => {
    setNewProfileImage(image);
  }

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault()
    updateProfile({variables: {
      profileId: user?.profile?.profileId ?? "",
      image: newProfileImage,
      about: descRef.current.value,
      lastName: lastNameRef.current.value,
      firstName: firstNameRef.current.value
    }}).then(() => {
      setUpdateComplete(true);
      const timeout = setTimeout(() => onSave && onSave(), 3000)
      return () => clearTimeout(timeout);
    })
  };

  if (updateComplete) return <AnimatedCheckMark />;
  if (error) return <SomethingWentWrong error={error} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 flex flex-col gap-10">
      <legend className={`flex flex-col gap-1`}>
        <h1 className=" font-semibold text-xl">Profile Information</h1>
        <p className="text-gray-500 text-lg">Your profile information will be vissible on podcasts and posts you create</p>
      </legend>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex-1 flex relative justify-center">
          <GImage
            className={`
              max-w-[20rem] max-h-[20rem]
              w-full bg-gray-100 aspect-square rounded-full p-3`}
            src={newProfileImage ? URL.createObjectURL(newProfileImage): user?.profile?.image ?? "/images/profile.svg"}
            alt={user?.fullName ?? "user profile image"}/>
        </div>
        <div className={`flex-1 gap-5 flex flex-col rounded-lg`}>
          <GInput
            ref={firstNameRef}
            classNameW="gap-1 flex flex-col"
            classNameI="bg-gray-50 transition-all px-3 p-2 focus:shadow rounded-lg w-full"
            classNameL={`text-sm text-gray-400 whitespace-nowrap flex items-center rounded-lg`}
            label="First Name"
            defaultValue={user?.firstName ?? ""}
            placeholder="Your first name" />
          <GInput
            ref={lastNameRef}
            label="Last Name"
            classNameW="gap-1 flex flex-col"
            classNameI="bg-gray-50 transition-all px-3 p-2 focus:shadow rounded-lg w-full"
            classNameL={`text-sm text-gray-400 whitespace-nowrap flex items-center rounded-lg`}
            defaultValue={user?.lastName ?? ""}
            placeholder="Your last name" />
          <GTextArea
            ref={descRef}
            label="About (Bio)"
            rows={10}
            classNameW="gap-1 flex flex-col"
            classNameI="bg-gray-50 transition-all px-3 p-2 focus:shadow rounded-lg w-full"
            classNameL={`text-sm text-gray-400 whitespace-nowrap flex items-center rounded-lg`}
            defaultValue={user?.profile?.about ?? ""}
            placeholder="A short bio of yourself"/>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400" htmlFor="profile-image">Profile photo</label>
        <IInput id="profile-image" getFile={getImage} name="Profile image"/>
      </div>
      <Button
        type="submit"
        className={`
          text-white bg-red-500 p-2 rounded-lg
          transition-all
          hover:bg-red-600 active:bg-red-600`}>Save</Button>
      {loading && <PageLoadingHalo />}
    </form>
  );
};
