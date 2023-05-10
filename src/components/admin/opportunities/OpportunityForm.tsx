import {
  Button, CenterSLoadingRing,
  DropDownList, FormErrors, GInput,
  MModal, SLoadingHalo, SomethingWentWrong, TextArea, TipTap } from "@components/common";
import { Maybe, OpportunityType } from "@gql/codegen/graphql";
import { useCreateUpdateOpportunity } from "@gql/requests/mutations/hooks";
import { useAllTags } from "@gql/requests/queries/hooks";
import { useRouter } from "next/router";
import React from "react";
import { TagForm } from "@components/admin";
import { Editor } from "@tiptap/core";


interface OpportunityFormProps {
  defaultValue?: Maybe<OpportunityType>;
}

export default function OpportunityForm(props: OpportunityFormProps) {
  const { defaultValue } = props;
  const [createUpdate, { loading, error }] = useCreateUpdateOpportunity();
  const { refetch, data: tagData, loading: tagLoading, error: tagError} = useAllTags({ category_Iexact: "opportunity" })
  const [category, setCategory] = React.useState<string>();
  const [content, setContent] = React.useState<string>();
  const [newTagOpen, setNewTagOpen] = React.useState(false)
  const router = useRouter();

  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const getCategory = (category: string) => setCategory(category);

  const onNewTagCreate = () => {
    setNewTagOpen(false);
    refetch()
  }

  const getContent = (editor: Editor | null) => {
      editor && setContent(editor.getHTML());
    };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    createUpdate({variables: {
      opportunityId: defaultValue?.opportunityId,
      abstract: descRef.current.value,
      title: titleRef.current.value,
      category: category,
      content
    }}).then((res) => {
        if (!res.errors) {
          router.replace("/admin/opportunities")
        }
      }).catch(err => console.log(err));
  }

  if (tagLoading) return <CenterSLoadingRing />
  if (tagError) return <SomethingWentWrong error={tagError} />

  const categories = tagData?.tags?.edges.map(tag => tag?.node?.title ?? "")

  return (
    <form onSubmit={handleSubmit}
      className="flex flex-col relative gap-3 rounded-lg">
      { error && <FormErrors errors={error} />}
      <GInput ref={titleRef} defaultValue={defaultValue?.title} 
        classNameL="bg-ui-red-200/80 text-lg p-1 px-3 font-semibold text-white rounded"
        classNameI="shadow text-lg focus:shadow-lg transition p-1 px-2 rounded-md w-full"
        classNameW="flex gap-3"
        label="Title" 
        placeholder="My opportunity title"/>

      <TextArea ref={descRef} rows={2}
        defaultValue={defaultValue?.abstract?.toString()}
        placeholder="A short description of this opportunity (will go on opportunity card)"/>
      <TipTap content={defaultValue?.content ?? ""} title="Opprtunity content" getContent={getContent}/>

      <div className="flex w-full gap-3">
        <label
          className="bg-ui-red-200/80 h-fit p-1 px-3 rounded text-white font-semibold">Category</label>
        <DropDownList full
          name="Category (e.g. Job listing, Internship, Scholarship e.t.c.)"
          defaultValue={defaultValue?.category?.title}
          getCurrent={getCategory}
          options={categories ?? []}/>
        <Button
          onClick={() => setNewTagOpen(true)}
          type="button"
          className={`
            hover:bg-green-500/90 active:bg-green-500/90 transition h-fit
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
      {loading && (
        <div className="absolute bg-white/40 h-full w-full ">
            <SLoadingHalo />
        </div>
      )}
    </form>
  )
}
