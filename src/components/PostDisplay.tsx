import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";

import { Post } from "@/types/types";
import PostComponent from "@components/PostComponent";

const getPosts = async () => {
    const url = 'http://localhost:4200/posts';

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Cannot get all posts");
    }

    const json = await response.json();
    const postMap: Map<string, Post> = new Map(Object.entries(json)); 
    return postMap;
}

const renderPosts = (postMap: Map<string, Post>) => {
    var ret: ReactElement[] = [];
    postMap.forEach(
        (value, key, map) => {
            ret.push(<PostComponent key={`post-${value.id}`} post={value} />);
        }
    );
    return ret;
}

const PostDisplay: React.FC<{}> = () => {

    const posts = useQuery({ queryKey: ['posts'], queryFn: getPosts });

    if(posts.isPending) {
        return (<div> Loading posts... </div>);
    }

    if(posts.isError) {
        return (<div> Errors getting posts </div>);
    }

    return (
        <div className="grid grid-flow-col auto-cols-max">
           { renderPosts(posts.data) }          
        </div>
    );
}

export default PostDisplay;