import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { className, ...rest } = props;
    return (
      <textarea ref={ref} {...rest}
          className={`
              shadow resize-none p-2 w-full rounded-lg text-sm md:text-base
              border border-transparent transition focus:border-black/20 ${className}`} />
    )
})

TextArea.displayName = "TextArea";
export default TextArea;
