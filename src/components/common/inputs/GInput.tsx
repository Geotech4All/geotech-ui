import React from "react";

export interface GInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
  /** className for input wrapper */
  classNameW?: string;
  classNameL?: string;
  classNameI?: string;
}
/**
 * GInput returns a generic input field attached to a label
 * without any styles
 * Simply pass the label props to give it a label
 * @param {string} classNameW - ClassName for the wrapper div.
 * @param {string} classNameI - ClassName for the input element.
 * @param {string} classNameL - ClassName for the label element
 */
const GInput = React.forwardRef<HTMLInputElement, GInputProps>((props, ref) => {
  const { label, children, classNameW, classNameI, classNameL, ...rest } = props;
  return (
    <div className={classNameW}>
      {label && <label className={classNameL} htmlFor={label}>{label}</label>}
      <input
        className={classNameI}
        id={label} ref={ref} {...rest} />
      { children }
    </div>
  )
})

GInput.displayName = "GInput";

export default GInput;
