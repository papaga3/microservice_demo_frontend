import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const mutationFn = async (title: string) => {
    const url = 'http://localhost:4000/posts';
    const response = await fetch(url, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title })
    });
    // console.log(response);
    if(!response.ok) {
        throw new Error(`Cannot create new post. Error: ${response.statusText}`);
    }

    const json = await response.json();
    return json;
}

// A component for creating new post
const CreatePost: React.FC<{}> = () => {
    const [ title, setTitle ] = useState("");

    const queryClient = useQueryClient();

    const postMutation = useMutation(
        {
            mutationFn: mutationFn,
            onError: (error, variables, context) => {
                alert(error);
            },
            onSuccess: (data, variables, context) => {
                queryClient.invalidateQueries( { queryKey: ['posts'] } );
            }
        }
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onButtonClick = () => {
        postMutation.mutate(title);
    }

    return (
        <div className="text-left ml-10 mt-10 space-y-4">
            <h1 className="font-bold text-xl"> Create Post </h1>
                <div className="w-64 flow-root">
                    <div className="block">
                        <p className="text-base inline"> Title </p>
                        <input 
                            className="inline ml-[10px] border-2 border-black" 
                            id="title_input" 
                            value={title} 
                            onChange={onChange}
                        />
                    </div>
                    <button 
                        className="block float-right border-2 border-black rounded-lg mt-2 w-10 h-10"
                        onClick={onButtonClick}
                    > 
                        Post 
                    </button>
                </div>
        </div>
    );
}

export default CreatePost;