export interface Comment {
    id: string;
    contend: string;
}

export interface Post {
    id: string;
    title: string;
    comments: Comment[];
}