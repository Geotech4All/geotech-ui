import React from "react";
import { TipTapMenuItem } from "@components/common";
import { Editor } from "@tiptap/core";
import { BiBold } from "react-icons/bi";
import { AiOutlineItalic } from "react-icons/ai";
import { MdFormatUnderlined } from "react-icons/md";

interface TipTapMenuBarProps {
  editor: Editor | null;
}

export default function TipTapMenuBar(props: TipTapMenuBarProps) {
  const { editor } = props;
  if (!editor) return null;
  editor.isActive("bold")
  return (
    <div className="flex gap-1 p-1 shadow rounded-xl">
      <TipTapMenuItem
        disabled={!editor.can().chain().focus().toggleBold().run()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        func="bold" icon={BiBold} editor={editor} />
      <TipTapMenuItem
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        icon={AiOutlineItalic}
        func="italic" editor={editor} />
      <TipTapMenuItem 
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        icon={MdFormatUnderlined}
        func="underline" editor={editor} />
    </div>
  );
};
