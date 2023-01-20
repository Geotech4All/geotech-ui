/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsImageFill } from "react-icons/bs";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  getFile?: (file?: File) => void;
};

/**
 * A Image Input filed with forwarded Ref
 */
const IInput = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { name, className, getFile, ...rest } = props;
  const [image, setImage] = React.useState<File>();
  const [dragActive, setDragActive] = React.useState(false);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    if (getFile) getFile(image);
  }, [image, getFile])

  const handleDrag: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    };
  };

  function setNewImage(image: File) {
    if (image.type.split("/")[0] === "image") {
      setImage(image);
    } else {
      setError(`invalid file of type ${image.type} please upload an image`)
    }
  }

  const handleDrop: React.DragEventHandler = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    const image = event.dataTransfer.files[0];
    if (image) {
      setNewImage(image);
    }
    setDragActive(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const newImage = event.target.files[0];
      setNewImage(newImage);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      className={`
        border-2 transition-all min-h-[9.5rem] relative overflow-hidden
        justify-center items-center
        ${dragActive ? "border-red-300" : "border-gray-200"}
        border-dashed rounded-2xl ${className}`}>
      {image && (
        <img
          className="absolute w-full self-center opacity-80 inset-0 z-[-10] object-contain"
          src={URL.createObjectURL(image)} alt={image.name}/>
        )}
      <input {...rest} onChange={handleChange} className="hidden" type="file" accept="image/*" ref={ref} id={name}/>
      <label className="p-5 flex-1 cursor-pointer flex justify-center items-center w-full h-full" htmlFor={name}>
        <div className="flex text-black/70 flex-col items-center justify-center w-full">
          <span
            className={`${image ? "text-green-400" : "text-red-400"} transition-all`}>
            <BsImageFill size={40}/>
          </span>
          {!image ? (
          <>
            <p className="font-bold text-lg">Drag and drop an Image</p>
            <p>or <span>browse</span> to choose image</p>
            {error && <p className="font-semibold text-lg text-red-500">{error}</p>}
          </>
          ):(<p className="font-bold text-lg">{image.name}</p>)}
        </div>
      </label>
      {dragActive && <div onDrop={handleDrop} onDragOver={handleDrag} onDragLeave={handleDrag} onDragEnter={handleDrag} className="absolute inset-0"/>}
    </div>
  )
  });

IInput.displayName = "IInput";

export default IInput;
