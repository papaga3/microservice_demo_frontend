import { ChangeEvent, useState } from "react";

const CreateComment = () => {
    const [comment, setComment] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    const onSubmitClick = () => {

    }

    return (
        <div>
            Comment
            <input
                className="inline border-2 border-black"
                id="title_input" 
                value={comment} 
                onChange={onChange}
            />
            <button
                className="border-2 border-black rounded-lg my-2"
                onClick={onSubmitClick}
            > 
                Submit 
            </button>
        </div>
    );
}

export default CreateComment;