/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import PreviewImage from "@components/common/images/PreviewImage";
import { ImageType, Maybe } from "@gql/codegen/graphql";
import React from "react";

interface ImagePickerItemProps {
    image: Maybe<ImageType> | undefined;
    onPickImage: (image: ImageType) => void;
}

export default function ImagePickerItem(props: ImagePickerItemProps){
    const { image, onPickImage } = props;
    const [showPreview, setShowPreview] = React.useState(false);
    const handlePickImage = () => image && onPickImage(image);

    const handleShowPreview: React.MouseEventHandler = (e) => {
        if (e.type == "mouseover") {
            setShowPreview(true);
        } else if (e.type == "mouseleave") {
            setShowPreview(false);
        };
    }

    return (
        <div className="relative w-fit cursor-pointer"
            onMouseOver={handleShowPreview}
            onMouseLeave={handleShowPreview}>
            <img onClick={handlePickImage}
                className="max-h-40 object-cover"
                src={image?.url} alt={image?.description ?? ""} title={image?.description ?? ""} />
            <AnimatePresence>
            {showPreview && (
                <motion.div
                    className="absolute w-screen max-w-2xl left-full bottom-0 bg-gray-100 p-1 rounded-md"
                    key={Math.random()}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}>
                    <div className="relative flex flex-col items-center">
                        <PreviewImage
                            src={image?.url}
                            alt={image?.description ?? ""}
                            title={image?.description ?? ""}/>
                        <p className="bg-white absolute bottom-2 w-[96%] p-2 rounded">{image?.description}</p>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
};
