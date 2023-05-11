import React from "react";
import { IconType } from "react-icons";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  children?: React.ReactNode;
  iconSize?: number;
  variant?: "Red" | "Yellow" | "Green" | "White" | "Black"
};

export default function UIButton(props: ButtonProps) {
  const { icon: Icon, variant, className, iconSize, children, ...rest } = props;
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
        if (variant == "Yellow") {
            setColor(`bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-600`)
        } else if (variant == "Green") {
            setColor("bg-green-500 text-white hover:bg-green-600 active:bg-green-600")
        } else if (variant === "Black") {
            setColor("bg-black text-white hover:bg-black/70 active:bg-black/70")
        } else if (variant === "White") {
            setColor("bg-white text-black hover:bg-white/20 hover:text-white active:bg-white/20 active-text-white")
        } else setColor("bg-red-500 text-white hover:bg-red-600 active:bg-red-600")
    }, [variant])

  return (
        <button 
            className={`${color}
               disabled:opacity-60 p-1 md:text-base 
               px-2 rounded text-xs font-semibold transition
            ${className}`}
            {...rest}>
          { Icon && <Icon size={iconSize}/> }
          { children }
        </button>
    );
};
