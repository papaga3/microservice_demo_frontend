// A component to render individual post

import React from "react";
import CreateComment from "./CreateComment";

interface Props {
    id: string;
    title: string;
}

const PostComponent: React.FC<Props> = ( {id, title} ) => {

    return(
        <div className="inline border-2 border-black m-2 w-60 text-left">
            <div className="ml-[10px]">
                <div className="font-semibold text-lg">
                    <p> {title} </p>
                </div>
                <div>
                    <CreateComment />
                </div>
            </div>
        </div>
    );
}

export default PostComponent;