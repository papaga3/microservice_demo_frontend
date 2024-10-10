// A component to render individual post

import React from "react";

interface Props {
    id: string;
    title: string;
}

const PostComponent: React.FC<Props> = ( {id, title} ) => {
    return(
        <div>
            <p> {id} </p>
            <p> {title} </p>
        </div>
    );
}

export default PostComponent;