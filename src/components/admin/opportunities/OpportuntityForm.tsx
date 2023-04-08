import { Button, CenterSLoadingRing, DropDownList, GInput, GTextArea, MModal, SomethingWentWrong } from "@components/common";
import { Maybe, OpportunityType } from "@gql/codegen/graphql";
import { useCreateUpdateOpportunity } from "@gql/requests/mutations/hooks";
import { useAllTags } from "@gql/requests/queries/hooks";
import { useRouter } from "next/router";
import React from "react";
import TagForm from "../tag/TagForm";


interface OpportunityFormProps {
  defaultValue?: Maybe<OpportunityType>;
}

export default function OpportunityForm(props: OpportunityFormProps) {
  const { defaultValue } = props;
  const [createUpdate, {loading}] = useCreateUpdateOpportunity();
  const { refetch, data: tagData, loading: tagLoading, error: tagError} = useAllTags({ category: "opportunity" })
  const [category, setCategory] = React.useState<string>();
  const [newTagOpen, setNewTagOpen] = React.useState(false)
  const router = useRouter();

  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const getCategory = (category: string) => setCategory(category);

  const onNewTagCreate = () => {
    setNewTagOpen(false);
    refetch()
  }

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    createUpdate({variables: {
      opportunityId: defaultValue?.opportunityId,
      description: descRef.current.value,
      title: titleRef.current.value,
      category: category 
    }}).then(() => router.replace("/admin/opportunities"));
  }

  if (tagLoading) return <CenterSLoadingRing />
  if (tagError) return <SomethingWentWrong error={tagError} />

  const categories = tagData?.tags?.edges.map(tag => tag?.node?.title ?? "")

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col shadow-xl gap-3 p-3 md:p-9 rounded-lg">

      {loading && <CenterSLoadingRing />}
      <GInput
        ref={titleRef}
        defaultValue={defaultValue?.title} 
        classNameL="bg-ui-red-200/80 text-lg p-1 px-3 font-semibold text-white rounded"
        classNameI="shadow text-lg focus:shadow-lg transition p-1 px-2 rounded-md w-full"
        classNameW="flex gap-3"
        label="Title" 
        placeholder="My opportunity title"/>

      <GTextArea
        ref={descRef}
        rows={10}
        defaultValue={defaultValue?.description?.toString()}
        classNameW="flex gap-3"
        classNameI="shadow text-lg focus:shadow-lg transition p-1 px-3 rounded-md w-full"
        placeholder="More details about this opportunity" />

      <div className="flex w-full gap-3">
        <label
          className="bg-ui-red-200/80 h-fit p-1 px-3 rounded text-white font-semibold">Category</label>
        <DropDownList
          name="Category"
          defaultValue={defaultValue?.category?.title}
          getCurrent={getCategory}
          options={categories ?? []}/>
        <Button
          onClick={() => setNewTagOpen(true)}
          type="button"
          className={`
            hover:bg-green-500/90 active:bg-green-500/90 transition
            bg-green-500/70 whitespace-nowrap p-1 px-2 rounded-md`}>Add Category</Button>
        <MModal open={newTagOpen} onClose={()=>setNewTagOpen(false)}>
          <TagForm onComplete={onNewTagCreate} />
        </MModal>
      </div>
      <Button
        type="submit"
        className={`
          bg-ui-red-200/80 p-1 rounded-md text-white text-lg transition
          font-semibold hover:bg-ui-red-200 active:bg-ui-red-200`}>Save</Button>
    </form>
  )
}
