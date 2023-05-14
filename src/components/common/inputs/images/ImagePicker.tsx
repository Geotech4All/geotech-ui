import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageType } from "@gql/codegen/graphql";
import { useImages } from "@gql/requests/queries/hooks";
import { images } from "@constants/images";
import {
    CenterSLoadingRing, ImagePickerFilter,
    ImagePickerItem, ImageUpload, MModal, NothingFound,
    SomethingWentWrong } from "@components/common";

interface ImagePickerProps {
    onClose: () => void;
    onPickImage: (image: ImageType) => void;
    children?: React.ReactNode;
}

const limit = 50;

export default function ImagePicker(props: ImagePickerProps){
    const { onClose, onPickImage, children } = props;
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

    const toggleImageForm = () => setImageFormOpen(curr => !curr);

    const handleNewImageSuccess = (_image: ImageType) => {
        refetch({ first: limit })
        toggleImageForm();
    }

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const atBottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if (atBottom) {
            fetchMore({ variables: { first: limit, after: data?.images.edges.pop()?.cursor}})
        }
    }

    const closePicker = () => onClose();
    const edges = data?.images.edges;

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
                        fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                        bg-gray-100 p-2 flex flex-col gap-3 rounded w-full max h-[98vh]
                        max-w-xs md:max-w-2xl shadow-lg overflow-auto`}
                    key={Math.random()} exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                    { loading && <CenterSLoadingRing /> }
                    {children}
                   <ImagePickerFilter onNew={toggleImageForm}onFilter={handleImageFilter}/>
                    <div onScroll={handleScroll}
                        className="w-full z-0 flex gap-1 min-h-[30rem] max-h-[35rem] overflow-auto">
                        {edges?.length && edges.length > 0 ?
                            edges?.map(edge => (
                                <ImagePickerItem onPickImage={onPickImage}
                                    image={edge?.node} key={edge?.cursor}/>)
                            )
                        : <NothingFound caption="No images found"
                            variant="small" image={images.imageSvg.img} alt={images.imageSvg.alt} />
                        }
                    </div>
                    <MModal open={imageFormOpen} onClose={toggleImageForm}>
                        <ImageUpload onSuccess={handleNewImageSuccess}/>
                    </MModal>
                </motion.div>
            </AnimatePresence>
        </>
    )
};
