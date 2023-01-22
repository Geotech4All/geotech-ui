import React from "react";
import { Button, ButtonProps } from "@components/common";
import { Editor } from "@tiptap/core";

interface TipTapMenuItemProps extends ButtonProps {
  func: "bold" | "italic" | "underline" | "heading" | "undo" | "redo";
  funcArgs?: Record<string, unknown>;
  showName?: string;
  editor: Editor;
}

export default function TipTapMenuItem(props: TipTapMenuItemProps){
  const { showName, func, funcArgs, editor, ...rest } = props;
  return (
    <Button
      {...rest}
      type="button"
      title={func}
      className={`
        ${editor.isActive(func.toLowerCase(), funcArgs) ? "bg-black/30" : "" }
        transition-all border text-black font-semibold text-xl disabled:text-black/30 active:bg-black/20 hover:bg-black/20 px-0.5 aspect-square rounded-lg`}
      iconSize={25}>{showName}</Button>
  );
}
