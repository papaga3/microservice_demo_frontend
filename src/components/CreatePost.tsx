import { ChangeEvent, useState } from "react";

// A component for creating new post
const CreatePost = () => {
    const [ title, setTitle ] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <div>
            <h1> Create Post </h1>
            <p> Title </p>s
            <input id="title_input" value={title} onChange={onChange}/>
        </div>
    );
}

export default CreatePost;