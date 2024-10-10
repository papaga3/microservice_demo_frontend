// A component to render individual post

import React from "react";
import CreateComment from "./CreateComment";

interface Props {
    id: string;
    title: string;
}

const PostComponent: React.FC<Props> = ( {id, title} ) => {

    return(
        <div className="inline border-2 border-black m-2 w-40">
            <div>
                <p> {id} </p>
                <p> {title} </p>
            </div>
            <div>
                <CreateComment />
            </div>
        </div>
    );
}

export default PostComponent;