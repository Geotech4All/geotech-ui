import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    return (
        <input {...props}
            className={`
                w-full bg-white/90 p-2 rounded-md border border-solid
                focus:border-black/25 focus:bg-white transition
                border-black/5 shadow`}
            ref={ref} type="text"/>
    )
});

TextInput.displayName = "TextInput";

export default TextInput;
