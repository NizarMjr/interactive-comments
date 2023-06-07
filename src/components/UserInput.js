import { setID, updateData, rendering } from "@/redux/Actions";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInput = () => {
    const [value, setValue] = useState('');
    const ID = useSelector(state => state.ID);
    const dispatch = useDispatch();
    const input = useRef();

    const addComment = () => {
        const new_comment = {
            id: ID,
            content: value,
            createdAt: '1 second ago',
            score: 0,
            user: {
                image: {
                    png: "./images/avatars/image-juliusomo.png",
                    webp: "./images/avatars/image-juliusomo.webp",
                },
                username: "juliusomo",
            },
            replies: [],
        }
        input.current.value = '';
        setValue('');
        if (new_comment.content) {
            dispatch(updateData(new_comment))
            dispatch(setID());
            dispatch(rendering())

            document.getElementsByClassName('add-alert')[0].classList.remove('hide-alert');
            setTimeout(() => {
                document.getElementsByClassName('add-alert')[0].classList.add('hide-alert');
            }, 2500)
        }
    }
    return (
        <div className="add-comment flex justify-between bg-[white] h-[200px] rounded p-[1rem]">
            <img className="second w-[50px] h-[50px]" src="../../images/avatars/image-juliusomo.png" alt="" />
            <textarea ref={input} onChange={(e) => setValue(e.target.value)} className="first p-[.5rem] rounded border-2 flex-1 mx-[1rem] h-[100%]" type="text" placeholder="Add comment" />
            <button onClick={() => addComment()} className="third h-[50px] py-[.5rem] px-[1rem] bg-replyTo text-white rounded">SEND</button>
        </div>
    )
}
export default UserInput;