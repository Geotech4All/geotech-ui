import React from "react";
import { TipTapMenuItem } from "@components/common";
import { Editor } from "@tiptap/core";
import { BiBold, BiUndo, BiRedo } from "react-icons/bi";
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
    <div className="flex w-fit self-end gap-1 p-1 shadow rounded-xl">
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
      <div className="rounded-xl p-0.5 border flex gap-1 items-center px-1">
        <TipTapMenuItem
          showName="h1"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          funcArgs={{ level: 1 }} func="heading" editor={editor} />
        <TipTapMenuItem
          showName="h2"
          // disabled={editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          funcArgs={{ level: 2 }} func="heading" editor={editor} />
        <TipTapMenuItem
          showName="h3"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          funcArgs={{ level: 3 }} func="heading" editor={editor} />
        <TipTapMenuItem
          showName="h4"
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          funcArgs={{ level: 4 }} func="heading" editor={editor} />
        <TipTapMenuItem
          showName="h5"
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          funcArgs={{ level: 5 }} func="heading" editor={editor} />
        <TipTapMenuItem
          showName="h6"
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          funcArgs={{ level: 6 }} func="heading" editor={editor} />
      </div>
      <TipTapMenuItem
        icon={BiUndo}
        onClick={() => editor.chain().focus().undo().run()}
        func="undo" editor={editor} />
      <TipTapMenuItem
        icon={BiRedo}
        onClick={() => editor.chain().focus().redo().run()}
        func="redo" editor={editor} />
    </div>
  );
};
