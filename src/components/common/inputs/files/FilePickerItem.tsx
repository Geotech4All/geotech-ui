import { motion, AnimatePresence } from "framer-motion";
import Button from "@components/common/buttons/Button";
import { FileType, Maybe } from "@gql/codegen/graphql";
import { MdAudiotrack } from "react-icons/md";
import React from "react";

interface FilePickerItemProps {
    file: Maybe<FileType> | undefined;
    onSelect?: (file: FileType) => void;
}

export default function FilePickerItem(props: FilePickerItemProps) {
    const { file, onSelect } = props;
    const [showPreview, setShowPreview] = React.useState(false);
    const togglePreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (e.type === "mouseover") { setShowPreview(true)}
        else if (e.type === "mouseleave") { setShowPreview(false) }
    }

    const handleClick = () => {
        if (onSelect && file) onSelect(file);
    }

    return (
        <div className="relative">
            <Button onClick={handleClick} onMouseLeave={togglePreview} onMouseOver={togglePreview}
                className="flex flex-col bg-gray-300 items-center rounded p-3 text-xs aspect-[1/1.2] w-[6rem]">
                <span className="pointer-events-none flex items-center justify-center flex-1"><MdAudiotrack size={40}/></span>
                <span className="pointer-events-none flex-1 max-w-full line-clamp-3 h-full">{file?.name}</span>
            </Button>
            <AnimatePresence>
                {showPreview && <FilePickerPreview file={file}/>}
            </AnimatePresence>
        </div>
    )
}

function FilePickerPreview(props: FilePickerItemProps)  {
    const { file } = props;
    return (
        <motion.div
            key={Math.random()}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed p-3 flex flex-col gap-2 max-w-sm rounded bg-gray-300">
            <span className="pointer-events-none flex items-center justify-center flex-1"><MdAudiotrack size={40}/></span>
            <div className="flex-1 flex flex-col gap-1">
                <h4 className="bg-white rounded whitespace-nowrap text-ellipsis p-2">{file?.name}</h4>
                <p className="bg-white rounded p-2">{file?.description}</p>
            </div>
        </motion.div>
    );
};
