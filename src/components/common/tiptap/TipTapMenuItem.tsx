import React from "react";
import { Button, ButtonProps } from "@components/common";
import { Editor } from "@tiptap/core";

interface TipTapMenuItemProps extends ButtonProps {
  func: "bold" | "italic" | "underline",
  editor: Editor;
}

export default function TipTapMenuItem(props: TipTapMenuItemProps){
  const { func, editor, ...rest } = props;
  return (
    <Button
      {...rest}
      title={func}
      className={`
        ${editor.isActive(func.toLowerCase()) ? "bg-black/30" : "" }
        transition-all border disabled:text-black/30 active:bg-black/20 hover:bg-black/20 px-0.5 aspect-square rounded-lg`}
      iconSize={30} />
  );
}
