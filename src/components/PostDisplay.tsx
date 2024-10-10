import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";

import { Post } from "@/types/types";
import PostComponent from "./PostComponent";

const getPosts = async () => {
    const url = 'http://localhost:4000/posts';

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
            ret.push(<PostComponent id={value.id} title={value.title} />);
        }
    );
    return ret;
}

const PostDisplay = () => {

    const posts = useQuery({ queryKey: ['posts'], queryFn: getPosts });

    if(posts.isPending) {
        return (<div> Loading posts... </div>);
    }

    if(posts.isError) {
        return (<div> Errors getting posts </div>);
    }

    return (
        <div>
           { renderPosts(posts.data) }          
        </div>
    );
}

export default PostDisplay;