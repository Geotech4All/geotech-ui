import React from "react"

interface StaffPermissionGroupProps {
    children?: React.ReactNode;
    title?: string;
};

export default function StaffPermissionGroup(props: StaffPermissionGroupProps) {
    const { children, title } = props;
    return (
        <section className="p-3 rounded-md border text-black/70 border-black/10">
            <h3 className="italic border border-transparent text-black/30">{title}</h3>
            {children}
        </section>
    );
};
