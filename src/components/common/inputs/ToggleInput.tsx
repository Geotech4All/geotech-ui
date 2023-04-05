import { Switch } from "@headlessui/react";
import React from "react";


interface ToggleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  enabled?: boolean;
  onEnableChange?: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleInput = React.forwardRef<HTMLInputElement, ToggleInputProps>((props, _) => {
  const { name, enabled, onEnableChange } = props;
  return (
    <Switch.Group>
      <div className="flex gap-4 justify-between w-full max-w-md items-center">
        {name && <Switch.Label className="text-lg md:text-xl">{name}</Switch.Label>}
        <Switch
          checked={enabled}
          onChange={onEnableChange}
          className={`
              ${enabled ? "bg-ui-red-200" : "bg-gray-300"} relative
              inline-flex h-6 w-11 items-center rounded-full transition-all`}>
              <span className="sr-only">{`Toggle ${name}`}</span>
              <span className={`
              ${enabled ? "translate-x-6": "translate-x-1"}
               inline-block h-4 w-4 tran rounded-full bg-white transition`}/>
          </Switch>
      </div>
    </Switch.Group>
  )
})

ToggleInput.displayName = "ToggleInput";

export default ToggleInput;
