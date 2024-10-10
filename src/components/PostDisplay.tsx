import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types/types";

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

const PostDisplay = () => {
    return (
        <div></div>
    );
}

export default PostDisplay;