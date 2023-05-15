import { FileType } from "@gql/codegen/graphql";
import { FaRegFileAudio } from "react-icons/fa";

interface FileThumbnail {
    file?: FileType;
}

export default function FileThumbnail(props: FileThumbnail) {
    const { file } = props;
    return (
        <div className="bg-black/20 flex flex-col p-2 justify-evenly items-center aspect-video rounded-lg">
            <span className={`${file ? "": "text-black/20"} flex-1 flex items-center`}><FaRegFileAudio size={90}/></span>
            {!file ? (<p className="italic text-lg flex-1 flex items-center text-black/60">empty</p>)
            :(
                <div className="w-full flex flex-col gap-2 flex-1">
                    <h3 className="bg-white/80 px-2 w-full p-1 rounded-md">{file.name}</h3>
                    <p className="bg-white/80 p-1 px-2 rounded-md h-full">{file.description}</p>
                </div>
            )}
        </div>
    );
};

function Empty() {
    return (
        <div></div>
    );
}
