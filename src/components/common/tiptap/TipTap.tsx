import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TipTapMenuBar } from "@components/common";
import Underline from "@tiptap/extension-underline"
import Paragraph from "@tiptap/extension-paragraph";
import { CustomImage } from "@components/common";
import { Editor } from "@tiptap/core";
import Heading from "@tiptap/extension-heading";

interface TipTapProps {
  content?: string;
  getContent?: (editor: Editor | null) => void;
  title?: string;
}

export default function TipTap(props: TipTapProps){
  const { content, title, getContent } = props;
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      CustomImage,
      Underline,
      Paragraph,
      Heading
    ],
    content
  });

  if (getContent) getContent(editor)

  return (
    <div className={`
      flex flex-col gap-2
      shadow p-1 w-full border-2 rounded-xl transition-all
      outline-0 outline-none
      focus-within:shadow-lg`}>
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="font-extrabold px-2 text-red-400/30 md:text-lg">{title}</div>
        <TipTapMenuBar editor={editor}/>
      </div>
      <EditorContent className="shadow rounded-md p-3" editor={editor} />
    </div>
  )
}
