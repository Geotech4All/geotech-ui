import React from "react";
import { DottedLabel, TextArea } from "@components/common";

interface LabeledTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}


const LabeledTextArea = React.forwardRef<HTMLTextAreaElement, LabeledTextAreaProps>((props, ref) => {
    const { label, ...rest } = props;
    return (
        <div className="flex flex-col gap-1 py-2">
            <DottedLabel>{label}</DottedLabel>
            <TextArea {...rest} ref={ref}/>
        </div>
    )
})

LabeledTextArea.displayName = "LabeledTextArea";

export default LabeledTextArea;
