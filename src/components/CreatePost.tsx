import { ChangeEvent, useState } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

// A component for creating new post
const CreatePost = () => {
    const [ title, setTitle ] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <div className="text-left ml-10 mt-10 space-y-4">
            <h1 className="font-bold text-xl"> Create Post </h1>
            <form className="w-64">
                <div className="block">
                    <p className="text-base inline"> Title </p>
                    <input 
                        className="inline ml-[10px] border-2 border-black" 
                        id="title_input" 
                        value={title} 
                        onChange={onChange}
                    />
                </div>
                <button className="block float-right border-2 border-black rounded-lg mt-2 w-10 h-10"> Post </button>
            </form>
        </div>
    );
}

export default CreatePost;