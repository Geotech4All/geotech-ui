import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    variant?: "Transparent";
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    const { variant } = props;
    const [bg, setBg] = React.useState("");
    React.useEffect(() => {
        if (variant === "Transparent") {
            setBg("bg-white/30 text-white focus:bg-white/40")
        } else {
            setBg("bg-white/90")
        }
    }, [variant])
    return (
        <input {...props}
            className={`
                w-full p-2 rounded-md border border-solid focus:border-black/25
                focus:bg-white transition border-black/5 shadow ${bg}`}
            ref={ref} type="text"/>
    )
});

TextInput.displayName = "TextInput";

export default TextInput;
