import styles from "@components/common/tiptap/styles.module.scss";

interface TipTapSectionProps {
    html: string;
}

export default function TipTapSection(props: TipTapSectionProps){
    const { html } = props;
    return (
        <section dangerouslySetInnerHTML={{ __html: html }}
            className={`
                flex text-lg md:text-xl flex-col w-full gap-4
                font-source-serif-pro ${styles.tiptap}`} />
    );
};
