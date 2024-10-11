// A component to render individual post

import React from "react";
import CreateComment from "@components/CreateComment";
import CommentDisplay from "@components/CommentDisplay";
import { Post } from "@/types/types";

interface Props {
   post: Post;
}

const PostComponent: React.FC<Props> = ( {post} ) => {

    return(
        <div className="inline border-2 border-black m-2 w-80 text-left">
            <div className="ml-[10px]">
                <div className="font-semibold text-lg">
                    <p> {post.title} </p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    Numbers of Comment: {post.comments.length}
                    <ul className="text-sm list-disc">
                        { post.comments.map(item => (
                                <li className="ml-[10px]"><CommentDisplay comment={item}/></li>
                            )
                        )}
                    </ul>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    <CreateComment postID={post.id} />
                </div>
            </div>
        </div>
    );
}

export default PostComponent;