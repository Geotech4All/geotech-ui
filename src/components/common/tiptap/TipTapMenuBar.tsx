import React from "react";
import { TipTapMenuItem } from "@components/common";
import { Editor } from "@tiptap/core";
import { BiBold, BiUndo, BiRedo } from "react-icons/bi";
import { AiOutlineItalic } from "react-icons/ai";
import { MdFormatUnderlined } from "react-icons/md";
import TipTapImage from "./TipTapImage";

interface TipTapMenuBarProps {
  editor: Editor | null;
}

// TODO: Add image pikcer to tiptap menu.

export default function TipTapMenuBar(props: TipTapMenuBarProps) {
  const { editor } = props;
  if (!editor) return null;
  editor.isActive("bold")
  return (
    <div className="flex flex-wrap items-center justify-end w-fit self-end gap-1 p-1 shadow rounded">
      <TipTapMenuItem
        icon={BiUndo}
        onClick={() => editor.chain().focus().undo().run()}
        func="Undo" shortCut="(Ctrl+z)" editor={editor} />
      <TipTapMenuItem
        icon={BiRedo}
        onClick={() => editor.chain().focus().redo().run()}
        func="Redo" shortCut="(Ctrl+Shift+z)" editor={editor} />
      <TipTapMenuItem
        disabled={!editor.can().chain().focus().toggleBold().run()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        func="Bold" shortCut="(Ctrl+b)" icon={BiBold} editor={editor} />
      <TipTapMenuItem
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        icon={AiOutlineItalic}
        func="Italic" shortCut="(Ctrl+i)" editor={editor} />
      <TipTapMenuItem 
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        icon={MdFormatUnderlined}
        func="Underline" shortCut="(Ctrl-u)" editor={editor} />
    <TipTapImage editor={editor}/>
      <div className="flex gap-1 items-center px-1">
        <TipTapMenuItem
          showName="h1"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          funcArgs={{ level: 1 }} func="Heading" shortCut="(Ctrl+Alt+1)" editor={editor} />
        <TipTapMenuItem
          showName="h2"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          funcArgs={{ level: 2 }} func="Heading" shortCut="(Ctrl+Alt+2)" editor={editor} />
        <TipTapMenuItem
          showName="h3"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          funcArgs={{ level: 3 }} func="Heading" shortCut="(Ctrl+Alt+3)" editor={editor} />
        <TipTapMenuItem
          showName="h4"
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          funcArgs={{ level: 4 }} func="Heading" shortCut="(Ctrl+Alt+4)" editor={editor} />
        <TipTapMenuItem
          showName="h5"
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          funcArgs={{ level: 5 }} func="Heading" shortCut="(Ctrl+Alt+5)" editor={editor} />
        <TipTapMenuItem
          showName="h6"
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          funcArgs={{ level: 6 }} func="Heading" shortCut="(Ctrl+Alt+6)" editor={editor} />
      </div>
    </div>
  );
};
