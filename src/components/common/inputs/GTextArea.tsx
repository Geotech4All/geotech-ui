import React from "react";

interface GTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  children?: React.ReactNode;
  classNameW?: string;
  classNameL?: string;
  classNameI?: string;
}

/**
 * GTextArea returns a generic textarea field attached to a label
 * without any styles
 * Simply pass the label props to give it a label
 * @param {string} classNameW - ClassName for the wrapper div.
 * @param {string} classNameI - ClassName for the textarea element.
 * @param {string} classNameL - ClassName for the label element
 */
const GTextArea = React.forwardRef<HTMLTextAreaElement, GTextAreaProps>((props, ref) => {
  const { classNameW, children, classNameL, classNameI, label, ...rest } = props;
  return (
    <div className={classNameW}>
      {label && <label className={classNameL} htmlFor={label}>{label}</label>}
      <textarea ref={ref} id={label} className={classNameI} {...rest}/>
      { children }
    </div>
  )
});

GTextArea.displayName = "GTextArea";

export default GTextArea;
