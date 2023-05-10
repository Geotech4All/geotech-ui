import React from "react";

interface ListProps {
    children?: React.ReactNode;
    title?: string;
};

export default function List(props: ListProps){
    const { children, title } = props;
    return (
        <div className="flex flex-col gap-3 p-2">
            <h3 className="font-bold text-lg text-black/60">{title}</h3>
            <ul className={`
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                lg:grid-cols-4 gap-3 w-full overflow-auto`}>
                {children}
            </ul>
        </div>
    );
};
