// A component to render individual post

import React from "react";

interface Props {
    id: string;
    title: string;
}

const PostComponent: React.FC<Props> = ( {id, title} ) => {
    return(
        <div className="inline border-2 border-black m-2 w-40">
            <p> {id} </p>
            <p> {title} </p>
        </div>
    );
}

export default PostComponent;