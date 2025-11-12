import { useRef } from "react";
import useClipboard from "../hooks/useClipboard";

const ClipboardExample = () => {
    const text = useRef();    
    const { status, handleCopy } = useClipboard();
    return (
        <div className="content border border-amber-400 rounded-md relative">
            <p className="p-4 text-balance" ref={text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                animi similique, possimus asperiores repudiandae deserunt assumenda
                porro deleniti dicta cum perspiciatis debitis nisi atque ea dolore
                rerum? Impedit, ea quis?
            </p>
            <button 
                className="px-2 absolute top-1 left-2 border border-amber-500 transition-all cursor-pointer hover:bg-amber-400"
                onClick={() => handleCopy(text.current.textContent)}
            >
                {status ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
};

export default ClipboardExample;
