import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    className?: string;
    children?: React.ReactNode
};

export default function ButtonLink(props: ButtonLinkProps){
    const { href, className , children} = props;
    return (
          <Link href={href}
            className={`
              absolute top-4 right-4 bg-black/90 text-white
              p-2 rounded-md hover:bg-black/70 transition-all
              font-semibold active:bg-black/70 ${className}`}>
              {children}
          </Link>
    )
};
