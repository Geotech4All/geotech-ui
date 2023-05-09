import React from "react";
import { IconType } from "react-icons";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  children?: React.ReactNode;
  iconSize?: number;
  variant?: "Red" | "Yellow" | "Green"
};

export default function UIButton(props: ButtonProps) {
  const { icon: Icon, variant, className, iconSize, children, ...rest } = props;
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
        if (variant == "Yellow") {
            setColor("bg-yellow-500 p-1 hover:bg-yellow-600 active:bg-yellow-600")
        } else if (variant == "Green") {
            setColor("bg-green-500 p-1 hover:bg-green-600 active:bg-green-600")
        } else setColor("bg-red-500 p-1 hover:bg-red-600 active:bg-red-600")
    }, [variant])

  return (
        <button 
            className={`${color} px-2 rounded text-white font-semibold transition
            ${className}`}
            {...rest}>
          { Icon && <Icon size={iconSize}/> }
          { children }
        </button>
    );
};
