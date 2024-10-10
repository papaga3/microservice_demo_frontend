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
                id="title_input" 
                value={comment} 
                onChange={onChange}
            />
            <button
                onClick={onSubmitClick}
            > 
                Submit 
            </button>
        </div>
    );
}

export default CreateComment;