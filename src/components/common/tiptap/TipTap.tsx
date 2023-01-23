import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { GTextArea, TipTapMenuBar } from "@components/common";
import Underline from "@tiptap/extension-underline"
import Paragraph from "@tiptap/extension-paragraph";
import CustomHeading from "./CustormHeading";
import { Editor } from "@tiptap/core";

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
      Image,
      Underline,
      Paragraph,
      CustomHeading
    ],
    content
  });

  if (getContent) getContent(editor)

  return (
    <div className={`
      flex flex-col gap-2
      shadow p-1 w-full border-2 rounded-2xl transition-all
      outline-0 outline-none
      focus-within:shadow-lg`}>
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="font-extrabold px-2 text-red-400/30 text-xl">{title}</div>
        <TipTapMenuBar editor={editor}/>
      </div>
      <EditorContent className="shadow rounded-2xl p-3" editor={editor} />
    </div>
  )
}
