import { PostAuthor, PostReadLength, PreviewImage } from "@components/common";
import { Maybe, PostType } from "@gql/codegen/graphql";
import React from "react";

interface ArticleReaderProps {
    title: string;
    readLength?: number;
    post?: Maybe<PostType> | undefined;
    body: string;
    image?: {
        src: string;
        alt: string;
    }
}

export default function ArticleReader(props: ArticleReaderProps) {
    const { image, title, readLength, post, body } = props;
    return (
        <article className="flex flex-col gap-4 md:gap-7 p-0.5 sm:px-10 sm:py-5 md:px-14 md:py-7 lg:px-32 lg:py-7">
            <PreviewImage straight
                className="shadow sm:rounded-md"
                src={image?.src ?? "/images/reading-geo-tech.svg"}
                alt={image?.alt} />
            <div className="p-3 md:p-0 flex flex-col gap-4 md:gap-7">
                <section className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-3 justify-between">
                        <h1 className={`
                            text-4xl md:text-5xl text-red-500 font-semibold font-source-serif-pro`}>
                            {title}
                        </h1>
                        {readLength && <PostReadLength length={readLength} /> }
                    </div>
                {post && <PostAuthor post={post}/>}
                </section>
                <section
                    className="flex text-lg md:text-xl flex-col w-full gap-4 font-source-serif-pro"
                    dangerouslySetInnerHTML={{ __html: body }}/>
            </div>
        </article>
    );
};
