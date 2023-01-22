import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { TipTapMenuBar } from "@components/common";
import Underline from "@tiptap/extension-underline"
import Paragraph from "@tiptap/extension-paragraph";

export default function TipTap(){
  const editor = useEditor({
    extensions: [
      StarterKit, Image, Underline, Paragraph
    ],
    content: `<p class="">This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />`
  });

  return (
    <div className={`
      shadow p-1 w-full border-2 rounded-2xl
      outline-0 outline-none
      border-red-400/60 focus-within:shadow-lg focus-within:shadow-black`}>
      <TipTapMenuBar editor={editor}/>
      <EditorContent className="outline-0 p-1" editor={editor} />
    </div>
  )
}
