/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ConfirmationProps {
  onConfirm?: React.MouseEventHandler<HTMLElement>;
  onCancel?: React.MouseEventHandler<HTMLElement>;
  message: string;
  confirmPrompt?: string;
  cancelPrompt?: string;
  item?: {
    name: string;
    imageSrc: string;
  }
}

export default function Confirmation(props: ConfirmationProps) {
  const { onConfirm, onCancel, message, confirmPrompt, cancelPrompt, item } = props;
  return (
    <div className="flex gap-3 flex-col items-center">
      <h1 className="text-lg flex text-center">{message}</h1>
      {item && (
         <div className="flex flex-col gap-3 items-center">
          {item.name && <h2 className="font-semibold text-2xl line-clamp-1">{item.name}</h2>}
          {item.imageSrc && (
            <img className="rounded-md max-h-[30rem] object-cover" src={item.imageSrc} alt={item.name} />
          )}
        </div> 
      )}
      <div className={`flex justify-evenly w-full`}>
        <button
          className={`
            hover:bg-red-600 active:bg-red-600 transition-all
            bg-red-500 p-1 px-2 rounded-md text-white`}
          onClick={onConfirm}>{confirmPrompt ?? "Confirm"}</button>
        <button
          className={`
            hover:bg-yellow-600 active:bg-yellow-600 transition-all
            bg-yellow-500 p-1 px-2 rounded-md text-white`}
          onClick={onCancel}>{cancelPrompt ?? "Cancel"}</button>
      </div>
    </div>
  );
};
