import { AnimatePresence, motion } from "framer-motion";
import List from "@components/common/containers/List";
import CenterSLoadingRing from "@components/common/loading/CenterSLoadingRing";
import { useFiles } from "@gql/requests/queries/hooks"
import { MdAudiotrack } from "react-icons/md";
import { FilePickerItem, FileUpload, MModal, TextInput, UIButton } from "@components/common";
import { FileFoldersEnum, FileType } from "@gql/codegen/graphql";
import React from "react";

interface FilePickerProps {
    onClose?: () => void;
    onSelect?: (file: FileType) => void;
    fileFolder?: FileFoldersEnum;
}

export default function FilePicker(props: FilePickerProps) {
    const { onClose, onSelect, fileFolder } = props;
    const { data, loading, refetch } = useFiles({ folder_Iexact: fileFolder });
    const [showFileForm, setShowFileForm] = React.useState(false);
    const searchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleClose = () => {
        console.log("Closing")
        onClose && onClose();
    }

    const handleRefetch = () => {
        refetch({ name_Icontains: searchRef.current.value, folder_Iexact: fileFolder })
    }

    const handleKeyDown: React.KeyboardEventHandler = (e) => {
        if (e.key == "Enter") {
            e.preventDefault()
            handleRefetch();
        }
    }

    const toggleFileForm = () => setShowFileForm(curr => !curr);

    const getFile = (audio?: FileType) => {
        toggleFileForm();
        if (onSelect && audio) onSelect(audio);
    }

    return (
        <div className="">
            <AnimatePresence>
                <motion.div
                    key={Math.random()}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleClose} className="bg-black/30 fixed inset-0"/>
            </AnimatePresence>
            <AnimatePresence>
                <motion.div
                    key={Math.random()}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-2 h-[95%] rounded flex flex-col gap-2 fixed bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-between">
                        <h1 className="text-lg text-black/70 font-medium">File Picker</h1>
                        <UIButton type="button" onClick={toggleFileForm} title="Upload new file" variant="Black">+ New</UIButton>
                    </div>
                    <div className="flex gap-2">
                        <TextInput onKeyDown={handleKeyDown} ref={searchRef} placeholder="Search by name"/>
                        <UIButton onClick={handleRefetch} type="button"
                            className="flex items-center" variant="Yellow">Filter</UIButton>
                    </div>
                    { data?.files.edges.length && data.files.edges.length > 0 ? (
                        <List>
                            {data?.files.edges.map(edge => <FilePickerItem onSelect={onSelect} file={edge?.node} key={edge?.cursor}/>)}
                        </List>
                    ): (
                        <div className="flex items-center gap-3 justify-center h-full">
                            <div className="bg-black/70 text-white w-fit p-2 rounded-md">
                                <MdAudiotrack size={70}/>
                            </div>
                            <span className="font-medium text-black/80">No files found</span>
                        </div>
                    )}
                    { loading && <CenterSLoadingRing /> }
                  <MModal open={showFileForm} onClose={toggleFileForm}><FileUpload fileFolder={fileFolder} onSuccess={getFile} /></MModal>
                </motion.div>
            </AnimatePresence>
        </div>
    )
    }
