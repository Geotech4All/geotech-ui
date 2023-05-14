import { SLoadingHalo, SomethingWentWrong, ToggleInput, UIButton } from "@components/common";
import { StaffType } from "@gql/codegen/graphql";
import { useUpdateStaff } from "@gql/requests/mutations/hooks";
import { Maybe } from "graphql/jsutils/Maybe";
import { useRouter } from "next/router";
import React from "react";
import { StaffPermissionGroup } from "@components/admin";

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
  const [canCreateOpportunities, setcanCreateOpportunities] = React.useState<boolean>(staff?.canCreateOpportunities ?? false)
  const [canUpdateOpportunities, setcanUpdateOpportunities] = React.useState<boolean>(staff?.canUpdateOpportunities ?? false)
  const [canDeleteOpportunities, setcanDeleteOpportunities] = React.useState<boolean>(staff?.canDeleteOpportunities ?? false)


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
        canDeleteUser,
        canCreateOpportunities,
        canUpdateOpportunities,
        canDeleteOpportunities
      }
    })
    router.replace("/admin/staff")
  }
  if (error) return <SomethingWentWrong error={error} />;
  return (
    <form onSubmit={submitHandler}
      className="w-full max-w-md flex relative flex-col gap-4">
      {loading && <div className="absolute h-full w-full bg-white/30"><SLoadingHalo /></div>}
      <legend className={`
          font-semibold text-xl bg-black/80 p-1.5 rounded-md text-white`}>Staff Permisions</legend>
      <div className="flex flex-col gap-1">
        <StaffPermissionGroup title="Posts">
            <ToggleInput enabled={canCreatePost} onEnableChange={setCanCreatePost} name="Can create post"/>
            <ToggleInput enabled={canAlterPost} onEnableChange={setCanAlterPost} name="Can alter (update) post"/>
            <ToggleInput enabled={canDeletePost} onEnableChange={setCanDeletePost} name="Can delete post"/>
        </StaffPermissionGroup>

        <StaffPermissionGroup title="Users">
            <ToggleInput enabled={canCreateUser} onEnableChange={setCanCreateUser} name="Can create user"/>
            <ToggleInput enabled={canAlterUser} onEnableChange={setCanAlterUser} name="Can alter (update) user"/>
            <ToggleInput enabled={canDeleteUser} onEnableChange={setCanDeleteUser} name="Can delete user"/>
        </StaffPermissionGroup>

        <StaffPermissionGroup title="Podcasts">
            <ToggleInput enabled={canCreatePodcast} onEnableChange={setCanCreatePodcast} name="Can create podcast"/>
            <ToggleInput enabled={canAlterPodcast} onEnableChange={setCanAlterPodcast} name="Can alter (update) podcast"/>
            <ToggleInput enabled={canDeletePodcast} onEnableChange={setCanDeletePodcast} name="Can delete podcast"/>
        </StaffPermissionGroup>

        <StaffPermissionGroup title="Opportunities">
            <ToggleInput enabled={canCreateOpportunities} onEnableChange={setcanCreateOpportunities} name="Can create opportunity"/>
            <ToggleInput enabled={canUpdateOpportunities} onEnableChange={setcanUpdateOpportunities} name="Can alter (update) opportunity"/>
            <ToggleInput enabled={canDeleteOpportunities} onEnableChange={setcanDeleteOpportunities} name="Can delete opportunity"/>
        </StaffPermissionGroup>
      </div>
      <UIButton variant="Black" type="submit">Save</UIButton>
    </form>
  )
};
