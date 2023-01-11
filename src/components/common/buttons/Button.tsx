import React from "react";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  children?: React.ReactNode;
  iconSize?: number;
};
export default function Button(props: ButtonProps) {
  const { icon: Icon, iconSize, children, ...rest } = props;
  return (
    <button {...rest}>
      { Icon && <Icon size={iconSize}/> }
      { children }
    </button>
  )
};
