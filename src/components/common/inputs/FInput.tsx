import { Maybe } from "@gql/codegen/graphql";
import React from "react";
import { BsFileEarmark } from "react-icons/bs";

interface FInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  valid: "image" | "audio";
  children?: React.ReactNode;
  className?: string;
  getFile?: (file?: File) => void;
  defaultFile?: Maybe<string>;
}

/**
 * A File Input filed with forwarded Ref
 */
const FInput = React.forwardRef<HTMLInputElement, FInputProps>((props, ref) => {
  const { name, children, className, valid, defaultFile, getFile, ...rest } = props;
  const [dragIsIn, setDragIsIn] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const [file, setFile] = React.useState<File>();


  React.useEffect(() => {
    if (getFile) getFile(file);
  }, [file, getFile])
  
  const handleDrag: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragIsIn(true);
    } else if (event.type === "dragleave") {
      setDragIsIn(false);
    }
  };

  function setNewFile(file: File) {
    if (file.type.split("/")[0] === valid){
      setFile(file);
    } else {
      setError(`invalid file of type "${file.type}" please pass a file of type "${valid}"`)
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]){
      const newFile = event.target.files[0]
      setNewFile(newFile);
    }
  };


  const handleDrop: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragIsIn(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const newFile = event.dataTransfer.files[0];
      setNewFile(newFile)
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragExit={() => setDragIsIn(false)}
      className={`
        border-2 border-dashed relative transition-all
        ${dragIsIn? "border-red-300" : "border-gray-200" }
        rounded-2xl ${className}`}>
      <input
        onChange={handleChange}
        className="hidden"
        type="file"
        {...rest}
        ref={ref} id={name}/>
      <label
        className={`cursor-pointer p-4 w-full h-full`} htmlFor={name}>
        {!file && !defaultFile ? (
          <div className="flex flex-col text-black/70 items-center justify-center">
            <span className="text-red-400"><BsFileEarmark size={50}/></span>
            <p className="font-bold text-lg">Drag &amp;	drop an audio file</p>
            <p>or <span className="text-red-400">browse </span>to choose a file</p>
            {error && <p className="font-semibold text-lg text-red-500">{error}</p>}
            {children}
          </div>
          ): !file && defaultFile ? (<FilePlaceHolder fileName={defaultFile} /> )
          : file && <FilePlaceHolder fileName={file.name} />
       }
      </label>
      {dragIsIn && <div className="fixed inset-0" onDragLeave={handleDrag} onDragEnter={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}/>}
    </div>
  )
  });

FInput.displayName = "FInput"

export default FInput;

interface FilePlaceHolderProps {
  fileName: string;
}

function FilePlaceHolder(props: FilePlaceHolderProps) {
  return (
     <div className="flex flex-col items-center justify-center gap-2 text-black/70">
        <span className="text-green-400"><BsFileEarmark size={40}/></span>
        <p className="font-bold text-lg">{props.fileName}</p>
      </div>
  )
}
