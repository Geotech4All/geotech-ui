import React from "react";


interface DropDownOptionProps {
  option: string;
  onSelect: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function DropDownOption(props: DropDownOptionProps) {
  const { option, onSelect } = props;

  const handleSetOption = () => {
    onSelect(option)
  }

  return (
    <button
      type="button"
      onClick={handleSetOption}
      className={`
        p-1 px-2 rounded-md hover:bg-gray-100 transition
        text-start content-start w-full`}>{option}</button>
  )
};
