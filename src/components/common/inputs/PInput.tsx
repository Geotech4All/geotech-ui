import React from "react";
import { LInput, Button } from "@components/common";
import type { LInputProps } from "@components/types";
import { HiOutlineEye } from "react-icons/hi";
import { FaRegEyeSlash } from "react-icons/fa";

/**
 * PInput returns an LInput of type password
 * with a password vissibility toggle.
 */
const PInput = React.forwardRef<HTMLInputElement, LInputProps>((props, ref) => {
  const [vissible, setVissible] = React.useState(false);

  function changeVissiblity(){
    if (vissible) {
      setVissible(false);
    } else {
      setVissible(true);
    }
};

  return (
    <LInput {...props} ref={ref} type={vissible ? "text": "password"}>
      <Button type="button" onClick={changeVissiblity} icon={vissible ? FaRegEyeSlash : HiOutlineEye}/>
    </LInput>
  )
});

PInput.displayName = "PInput";

export default PInput;
