import React from "react";

interface DottedLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{};

export default function DottedLabel(props: DottedLabelProps) {
    const { children, ...rest } = props;
    return (
        <label {...rest} className="before:content-['\2022'] before:p-1 text-black/80 font-semibold before:text-lg">
            {children}
        </label>
    );
};
