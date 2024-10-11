import { Comment } from "@/types/types";

interface Props {
    comment: Comment
}

const CommentDisplay: React.FC<Props> = ({ comment }) => {
    return (
        <div> {comment.contend} </div>
    );
}

export default CommentDisplay;