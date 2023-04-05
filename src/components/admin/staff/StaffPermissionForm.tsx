import { Button, SLoadingHalo, SomethingWentWrong, ToggleInput } from "@components/common";
import { StaffType } from "@gql/codegen/graphql";
import { useUpdateStaff } from "@gql/requests/mutations/hooks";
import { Maybe } from "graphql/jsutils/Maybe";
import { useRouter } from "next/router";
import React from "react";

interface StaffPermissionFormProps {
  defaultValue?: Maybe<StaffType>;
}

export default function StaffPermissionForm(props: StaffPermissionFormProps){
  const { defaultValue: staff } = props;
  const [updateStaff, {error, loading}] = useUpdateStaff();
  const router = useRouter();

  const [canCreatePost, setCanCreatePost] = React.useState<boolean>(staff?.canCreatePost ?? false)
  const [canAlterPost, setCanAlterPost] = React.useState<boolean>(staff?.canAlterPost ?? false)
  const [canDeletePost, setCanDeletePost] = React.useState<boolean>(staff?.canDeletePost ?? false)
  const [canAlterUser, setCanAlterUser] = React.useState<boolean>(staff?.canAlterUser ?? false)
  const [canCreateUser, setCanCreateUser] = React.useState<boolean>(staff?.canCreateUser ?? false)
  const [canDeleteUser, setCanDeleteUser] = React.useState<boolean>(staff?.canDeleteUser ?? false)
  const [canCreatePodcast, setCanCreatePodcast] = React.useState<boolean>(staff?.canCreatePodcast ?? false)
  const [canAlterPodcast, setCanAlterPodcast] = React.useState<boolean>(staff?.canAlterPodcast ?? false)
  const [canDeletePodcast, setCanDeletePodcast] = React.useState<boolean>(staff?.canDeletePodcast ?? false)

  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault()
    updateStaff({
      variables: {
        userEmail: staff?.user?.email ?? "",
        canDeletePodcast,
        canAlterPodcast,
        canCreatePodcast,
        canAlterPost,
        canAlterUser,
        canCreatePost,
        canCreateUser,
        canDeletePost,
        canDeleteUser
      }
    })
    router.replace("/admin/staff")
  }
  if (error) return <SomethingWentWrong error={error} />;
  return (
    <form
      onSubmit={submitHandler}
      className="w-fit flex relative flex-col gap-4">
      {loading && <div className="absolute h-full w-full bg-white/30"><SLoadingHalo /></div>}
      <legend
        className={`font-semibold text-2xl bg-ui-red-200/70
                    p-2 rounded-lg text-white`}>Staff Permisions</legend>
      <div className="h-[2px] w-1/2 bg-gray-200"/>
      <div>
        <ToggleInput enabled={canCreatePost} onEnableChange={setCanCreatePost} name="Can create post"/>
        <ToggleInput enabled={canAlterPost} onEnableChange={setCanAlterPost} name="Can alter (update) post"/>
        <ToggleInput enabled={canDeletePost} onEnableChange={setCanDeletePost} name="Can delete post"/>
        <ToggleInput enabled={canCreateUser} onEnableChange={setCanCreateUser} name="Can create user"/>
        <ToggleInput enabled={canAlterUser} onEnableChange={setCanAlterUser} name="Can alter (update) user"/>
        <ToggleInput enabled={canDeleteUser} onEnableChange={setCanDeleteUser} name="Can delete user"/>
        <ToggleInput enabled={canCreatePodcast} onEnableChange={setCanCreatePodcast} name="Can create podcast"/>
        <ToggleInput enabled={canAlterPodcast} onEnableChange={setCanAlterPodcast} name="Can alter (update) podcast"/>
        <ToggleInput enabled={canDeletePodcast} onEnableChange={setCanDeletePodcast} name="Can delete podcast"/>
      </div>
      <Button
        type="submit"
        className={`
          text-xl rounded-xl w-fit px-5 self-end justify-end
          p-2 bg-ui-red-200/90 text-white hover:opacity-70
          transition active:opacity-70`}>Update</Button>
    </form>
  )
};
