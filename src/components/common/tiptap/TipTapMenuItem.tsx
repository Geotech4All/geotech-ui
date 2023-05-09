import React from "react";
import { Button, ButtonProps } from "@components/common";
import { Editor } from "@tiptap/core";

interface TipTapMenuItemProps extends ButtonProps {
  func: "Bold" | "Italic" | "Underline" | "Heading" | "Undo" | "Redo" | "Insert Image";
  shortCut?: string;
  funcArgs?: Record<string, unknown>;
  showName?: string;
  editor: Editor;
}

export default function TipTapMenuItem(props: TipTapMenuItemProps){
  const { showName, func, shortCut, funcArgs, editor, ...rest } = props;
  return (
    <Button
      {...rest} type="button" title={`${func} ${shortCut ?? ""}`}
      className={`
        ${editor.isActive(func.toLowerCase(), funcArgs) ? "bg-black/30" : "" }
        transition-all border p-1 text-black text-sm md:text-base disabled:text-black/30
        active:bg-black/20 hover:bg-black/20 aspect-square rounded`}
      iconSize={25}>{showName}</Button>
  );
}
