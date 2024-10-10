import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

interface mutationInput {
    postID: string;
    content: string;
}

const mutationFn = async (input: mutationInput) => {
    const url = `localhost:4100/posts/${input.postID}/comments`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: input.content })
    });

    if(!response.ok) {
        throw new Error(`Cannot create new comment. Error: ${response.statusText}`);
    }

    const json = await response.json();
    return json;
}

interface Props {
    postID: string;
}

const CreateComment: React.FC<Props> = ({ postID }) => {
    const [content, setContent] = useState("");

    const commentMutation = useMutation(
        {
            mutationFn: mutationFn,
            onError: (error, variables, context) => {
                alert(error);
            },
            /*onSuccess: (data, variables, context) => {
                queryClient.invalidateQueries( { queryKey: ['posts'] } );
            }*/
        }
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }

    const onSubmitClick = () => {
        commentMutation.mutate({ postID: postID, content: content});
    }

    return (
        <div>
            Comment
            <input
                className="inline border-2 border-black"
                id="title_input" 
                value={content} 
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