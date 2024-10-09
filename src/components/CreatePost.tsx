import { ChangeEvent, useState } from "react";

// A component for creating new post
const CreatePost = () => {
    const [ title, setTitle ] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <div className="text-left ml-10 mt-10">
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
                <button className="block float-right"> Post </button>
            </form>
        </div>
    );
}

export default CreatePost;