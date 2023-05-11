import React from "react";

interface ArticleProps {
    children?: React.ReactNode;
};

export default function Article(props: ArticleProps) {
    const { children } = props;
    return (
        <article className={`
            flex flex-col gap-4 md:gap-7 p-0.5 sm:px-10
            sm:py-5 md:px-14 md:py-7 lg:px-32 lg:py-7`}>
            { children }
        </article>
    );
};
