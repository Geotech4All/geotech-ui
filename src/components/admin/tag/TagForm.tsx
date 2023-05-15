import { AnimatedCheckMark, CenterSLoadingRing, SomethingWentWrong, TextArea, TextInput, UIButton } from "@components/common";
import { Maybe, TagType } from "@gql/codegen/graphql";
import { useCreateUpdateTag } from "@gql/requests/mutations/hooks";
import React from "react";


interface TagFormProps {
  defaultValue?: Maybe<TagType>;
  onComplete?: () => void;
}

export default function TagForm(props: TagFormProps) {
  const { defaultValue, onComplete } = props;
  const [createUpdateTag, { loading, error }] = useCreateUpdateTag();
  const [complete, setComplete] = React.useState(false);
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>
  const catRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  if (complete) return <AnimatedCheckMark />
  if (error) return <SomethingWentWrong error={error} />
  const handleSubmit: React.FormEventHandler = (event) => {
    event?.preventDefault()
    createUpdateTag({ variables: {
      category: catRef.current.value,
      title: titleRef.current.value,
      description: descRef.current.value,
      tagId: defaultValue?.tagId
    }}).then(()=>{
        setComplete(true)
        const timeout = setTimeout(() => {
          onComplete && onComplete()
        }, 3000)
        return () => clearTimeout(timeout)
      })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-3 relative">
      <legend
        className="bg-black/80 p-2 px-3 rounded-md text-white font-semibold text-lg">New Tag</legend>
      <TextInput defaultValue={defaultValue?.title}
        ref={titleRef} placeholder="Tag title" />
      <TextArea defaultValue={defaultValue?.description ?? ""}
        ref={descRef} placeholder="Tag description"/>
      <TextInput defaultValue={defaultValue?.category}
        ref={catRef} placeholder="Category i.e what is getting tagged e.g. Podcast, Opportunity, Post"/>
      <UIButton variant="Black" onClick={handleSubmit} type="button">Save</UIButton>
      {loading && (
        <div className="absolute w-full h-full bg-white/30">
          <CenterSLoadingRing />
        </div>
      )}
    </form>
  )
}
