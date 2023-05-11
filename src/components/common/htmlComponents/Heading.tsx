import React from "react";

interface HeadingProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Heading(props: HeadingProps){
    const { children, className } = props;
    return (
        <h1 className={`
            text-4xl md:text-5xl text-black/90 font-bold
            font-source-serif-pro ${className}`}>
            {children}
        </h1>
    );
};
