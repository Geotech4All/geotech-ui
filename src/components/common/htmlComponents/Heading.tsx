import React from "react";

interface HeadingProps {
    children?: React.ReactNode;
}

export default function Heading(props: HeadingProps){
    const { children } = props;
    return (
        <h1 className={`text-4xl md:text-5xl text-black/90 font-bold font-source-serif-pro`}>
            {children}
        </h1>
    );
};
