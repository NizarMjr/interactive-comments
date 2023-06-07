import { useEffect, useState } from "react";
import Vote from "./Vote";
import Replie from "./Replie";
import Reply from "./Reply";
import { useSelector } from "react-redux";

const Replies = (props) => {
    const render_ = useSelector(state => state.render);
    const { replieS } = props;
    const [replies, setReplies] = useState(replieS);

    useEffect(() => {
        setReplies(replieS); //UPDATE COMPONENT
    }, [render_])
    return (

        <main>
            {replies.length !== 0 ?
                replies.map((rep) => {
                    return (
                        <main key={rep.id} className="translate-x-[50%] replies w-[calc(100%/1.5)]">
                            <article className="replie overflow-auto flex justify-between items-center bg-[white] my-[2rem] rounded p-[1rem]">
                                <Vote score={rep.score} />
                                <Replie rep={rep} />
                            </article>
                            <Reply id={rep.id} replyTo={rep.user.username} />
                            <Replies replieS={rep.replies} />
                        </main>
                    )
                }) : ''}
        </main>
    )
}
export default Replies;