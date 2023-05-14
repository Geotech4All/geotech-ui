import React from "react";
import { AnimatedCheckMark, GImage, GInput, Heading, ImageUpload, LabeledTextArea, LoadingSuccess, MModal, PageLoadingHalo, SomethingWentWrong, UIButton } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectUser } from "@store/slices";
import { useUpdatePodcast } from "@gql/requests/mutations/hooks";
import { ImageType } from "@gql/codegen/graphql";

interface ProfileFormProps {
  onSave?: () => void;
}

export default function ProfileForm(props: ProfileFormProps){
  const { onSave } = props;
  const user = useAppSelector(selectUser);
  const [ updateProfile, { loading, error, data } ] = useUpdatePodcast();
  const [showImageForm, setShowImageForm] = React.useState(false);
  const firstNameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const lastNameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [newProfileImage, setNewProfileImage] = React.useState<ImageType>();

  const toggleImageForm = () => setShowImageForm(curr => !curr);

  const getImage = (image?: ImageType) => {
    setNewProfileImage(image);
    toggleImageForm();
  };
  
  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault()
    updateProfile({variables: {
      profileId: user?.profile?.profileId ?? "",
      imageId: newProfileImage?.imageId,
      about: descRef.current.value,
      lastName: lastNameRef.current.value,
      firstName: firstNameRef.current.value
    }}).then(() => {
      const timeout = setTimeout(() => onSave && onSave(), 3000)
      return () => clearTimeout(timeout);
    })
  };

  if (error) return <SomethingWentWrong error={error} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 md:p-8 flex flex-col gap-4">
      <Heading className="italic text-black/40">{user?.fullName}</Heading>
      {user?.fullName === "None None" && (
          <div className="text-red-500">
            <p><strong>Note:</strong> if you see &quot;None None&quot;, it is because you haven&apos;t updated your first and last names.</p>
            <p>Your names will be displayed on articles and podcasts you create so be sure to update it.</p>
          </div>
      )}
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex-1 flex relative w-full justify-center">
          <GImage className={`h-screen bg-gray-300 max-h-[75vh] md:max-h-[80vh] lg:h-full aspect-square rounded-lg p-3`}
            alt={user?.profile?.image?.description ?? user?.fullName ?? ""}
            src={newProfileImage ? newProfileImage.url: user?.profile?.image?.url ?? "/images/profile.svg"}/>
        </div>
        <div className={`flex-1 gap-5 flex flex-col rounded-lg`}>
          <GInput ref={firstNameRef} label="First Name"
            defaultValue={user?.firstName ?? ""} placeholder="Your first name" />
          <GInput ref={lastNameRef} label="Last Name"
            defaultValue={user?.lastName ?? ""} placeholder="Your last name" />
          <LabeledTextArea ref={descRef} label="About (Bio)" rows={10}
            defaultValue={user?.profile?.about ?? ""} placeholder="A short bio of yourself"/>
          <UIButton onClick={toggleImageForm} type="button" variant="Black">{user?.profile?.image ? "Edit": "Add"} Profile Image</UIButton>
        </div>
      </div>
      <MModal onClose={toggleImageForm} open={showImageForm}>
        <ImageUpload onSuccess={getImage} />
      </MModal>
      <UIButton variant="Black" type="submit" >Save</UIButton>
      {loading && <PageLoadingHalo />}
      { data?.profile?.success && <LoadingSuccess /> }
    </form>
  );
};
