import React from "react";
import { UIButton, TextInput } from "@components/common";
import { FiFilter } from "react-icons/fi";

interface ImagePickerFilterProps {
    onFilter?: (text: string) => void;
    onNew?: () => void;
}

export default function ImagePickerFilter(props: ImagePickerFilterProps){
    const { onFilter, onNew } = props;
    const textRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") { 
            e.preventDefault();
            handleFilter();
        };
    }
    const handleFilter = () => {
        if (onFilter && textRef.current) { onFilter(textRef.current.value) };
    };
    const handleNew = () => onNew && onNew();

    return (
        <div className="flex gap-1">
            <UIButton onClick={handleNew} variant="Black"
                className="whitespace-nowrap" type="button">New +</UIButton>
            <TextInput ref={textRef}
                onKeyDown={handleKeyPress}
                placeholder="Search image by description"/>
            <UIButton type="button" title="filter" onClick={handleFilter} variant="Yellow">
                <FiFilter size={20} />
            </UIButton>
        </div> 
   )
};
