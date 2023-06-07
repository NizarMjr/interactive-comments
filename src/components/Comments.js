"use client"
import Vote from "./Vote";
import Comment from "./Comment";
import Replies from "./Replies";
import UserInput from "./UserInput";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Reply from "./Reply";

const Comments = () => {
    const render_ = useSelector(state => state.render);
    const dataFromRedux = useSelector(state => state.data);
    const [data, setData] = useState(dataFromRedux);

    useEffect(() => {
        setData(dataFromRedux);
    }, [dataFromRedux])

    useEffect(() => {
        setData(dataFromRedux); //UPDATE COMPONENT
    }, [render_])

    const comments = data.comments?.map((comment) => {
        return (
            <main className="relative" key={comment.id}>
                <article key={comment.id} className="comment relative flex justify-between items-center bg-[white] my-[2rem] rounded p-[1rem]">
                    <Vote score={comment.score} />
                    <Comment comment={comment} />
                </article>
                <Reply id={comment.id} replyTo={comment.user.username} />
                <Replies replieS={comment.replies} replyTo={comment.user.username} />
            </main>
        )
    })
    return (
        <main className="container my-[2rem]">
            {comments}
            <UserInput />
        </main>
    )
}
export default Comments;