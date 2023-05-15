import React from "react"
import { motion } from "framer-motion";
import { IoCloudUploadOutline } from "react-icons/io5";
import validateFiles from "./validateFiles";

interface DragAndDropProps {
    onAddFiles?: (files: File[]) => void;
    accept: string;
}

export default function DragAndDrop(props: DragAndDropProps){
    const { onAddFiles, accept } = props;
    const [dragActive, setDragActive] = React.useState(false);
    const [err, setErr] = React.useState<string>();

    const handleDrag: React.DragEventHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type == "dragenter" || e.type == "dragover") {
            setDragActive(true);
        } else if (e.type == "dragleave") {
            setDragActive(false);
        }
    }

    const handleDrop: React.DragEventHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (validateFiles(accept, file)) {
                const new_files = Array.from(e.dataTransfer.files);
                onAddFiles && onAddFiles(new_files)
            } else {
                const extension = file.name.split(".").pop()
                console.log("Err hapened")
                setErr(`${extension} files are not accepted`)
            }
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const newFiles = Array.from(e.target.files);
            onAddFiles && onAddFiles(newFiles);
        }
    }

    return (
        <motion.div
            className="w-full flex flex-col gap-3"
            animate={{ scale: dragActive ? "1.2": "1" }}
            onDragEnter={handleDrag}>
            { err && <p className="p-2 text-red-400 bg-red-50 rounded-md border border-red-400">{err}</p>}
            <label
                className={`
                    hover:text-black/50 hover:border-black/50
                    border-dashed cursor-pointer transition text-2xl flex
                    flex-col items-center w-full bg-white border-[3px] p-12
                    rounded-xl border-spacing-10 ${dragActive ?
                    "border-black/50 text-black/50" : "text-gray-500 border-gray-200"}`}
                htmlFor="file-input-field">
                <input accept={accept} onChange={handleChange} id="file-input-field" className="hidden" type="file" />
                <span><IoCloudUploadOutline size={100}/></span>
                <p>Drag and drop or <span className="text-black/80 font-semibold">click</span> to choose files</p>
            </label>
            {dragActive && (
                <div onDrop={handleDrop}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDragEnter={handleDrag}
                    className="absolute inset-0" />
            )}
        </motion.div>
    )
}
