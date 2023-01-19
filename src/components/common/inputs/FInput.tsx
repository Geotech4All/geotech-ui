import React from "react";
import { BsFileEarmark } from "react-icons/bs";

interface FInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  children?: React.ReactNode
}
const FInput = React.forwardRef<HTMLInputElement, FInputProps>((props, ref) => {
  const { name: label, children, ...rest } = props;
  const [dragIsIn, setDragIsIn] = React.useState(false);
  const [file, setFile] = React.useState<File>();

  const handleDrag: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragIsIn(true);
    } else if (event.type === "dragleave") {
      setDragIsIn(false);
    }
  };


  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]){
      const audioFile = event.target.files[0];
      setFile(audioFile);
    }
  };

  const handleDrop: React.DragEventHandler = (event) => {
    console.log("Droped")
    event.preventDefault();
    event.stopPropagation();
    setDragIsIn(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const audioFile = event.dataTransfer.files[0];
      setFile(audioFile);
    }
  };

  console.log(file);

  return (
    <div
      onDragEnter={handleDrag}
      onDragExit={() => setDragIsIn(false)}
      className={`border-2 border-dashed relative ${dragIsIn? "border-red-300" : "border-gray-200" } rounded-2xl`}>
      <input
        onChange={handleChange}
        className="hidden"
        type="file"
        {...rest}
        ref={ref} id={label}/>
      <label
        className={`cursor-pointer p-4 w-full h-full`} htmlFor={label}>
        {!file ? children :
        <div className="flex flex-col items-center justify-center gap-2 text-black/70">
          <span className="text-green-400"><BsFileEarmark size={40}/></span>
          <p className="font-bold text-lg">{file.name}</p>
        </div>}
      </label>
      {dragIsIn && <div className="fixed inset-0" onDragLeave={handleDrag} onDragEnter={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}/>}
    </div>
  )
  });

FInput.displayName = "FInput"

export default FInput;
