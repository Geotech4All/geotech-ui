import React from "react";
import TextInput from "./text/Input";

export interface GInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "Transparent";
}
/**
 * GInput returns a generic input field attached to a label
 * without any styles
 * Simply pass the label props to give it a label
 * @param {string} className - ClassName for the input element.
 */
const GInput = React.forwardRef<HTMLInputElement, GInputProps>((props, ref) => {
  const { label, children, variant, className, ...rest } = props;
  return (
    <div className={`flex gap-3`}>
      {label && (
        <label htmlFor={label}
            className={`
                bg-black text-white whitespace-nowrap items-center
                flex p-2 rounded font-semibold`}>{label}</label>)}
      <TextInput variant={variant} className={className} id={label} ref={ref} {...rest} />
      { children }
    </div>
  )
})

GInput.displayName = "GInput";

export default GInput;
