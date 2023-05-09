import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageType } from "@gql/codegen/graphql";
import { useImages } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, ImagePickerFilter, ImagePickerItem, ImageUpload, MModal, SomethingWentWrong, TextInput, UIButton } from "@components/common";

interface ImagePickerProps {
    onClose: () => void;
    onPickImage: (image: ImageType) => void;
}

const limit = 50;

export default function ImagePicker(props: ImagePickerProps){
    const { onClose, onPickImage } = props;
    const { data, loading, error, fetchMore, refetch } = useImages({ first: limit });
    const [imageFormOpen, setImageFormOpen] = React.useState(false);
    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            refetch({ first: limit, description_Icontains: description });
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [description, refetch])
    const handleImageFilter = (text: string) => setDescription(text);

    const handleImageFormClose = () => {
        setImageFormOpen(false);
    }

    const handleNewImageSuccess = (_image: ImageType) => {
        refetch({ first: limit })
    }

    const closePicker = () => onClose();

    if (error) return <SomethingWentWrong error={error} />

    return (
        <>
            <AnimatePresence>
                <motion.div
                key={Math.random()}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={closePicker} className="bg-black/20 fixed inset-0" />
            </AnimatePresence>
            <AnimatePresence>
                <motion.div
                    className={`
                        fixed top-1/3 bg-gray-100 p-2 flex flex-col gap-3 rounded w-full
                        max-w-2xl shadow-lg`}
                    key={Math.random()}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}>
                    { loading && <CenterSLoadingRing /> }
                   <ImagePickerFilter onFilter={handleImageFilter}/>
                    <div>
                        {data?.images.edges.map(edge => (
                            <ImagePickerItem
                                onPickImage={onPickImage}
                                image={edge?.node} key={edge?.cursor}/>)
                        )}
                    </div>
                    <MModal open={imageFormOpen} onClose={handleImageFormClose}>
                        <ImageUpload onSuccess={handleNewImageSuccess}/>
                    </MModal>
                </motion.div>
            </AnimatePresence>
        </>
    )
};
