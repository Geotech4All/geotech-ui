import React from "react";

export interface LInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}
/**
 * LInput returns an input filed attached to a label
 * Simply pass the label props to give it a label
 */
const LInput = React.forwardRef<HTMLInputElement, LInputProps>((props, ref) => {
  const { label, children, className, ...rest } = props;
  return (
    <div className="flex focus-within:shadow transition-all gap-2 items-center text-inherit border rounded-lg px-3">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        className={`w-full bg-transparent outline-none outline-0 p-2 ${className}`}
        id={label} ref={ref} {...rest} />
      { children }
    </div>
  )
})

LInput.displayName = "LInput";

export default LInput;
