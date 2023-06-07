import { setID, updateComment, rendering } from "@/redux/Actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Reply = (props) => {
    const [value, setValue] = useState('');
    const { id, replyTo } = props;
    const ID = useSelector(state => state.ID);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const reply = () => {
        if (value.length !== 0) {
            const new_reply = {
                id: ID,
                content: value,
                createdAt: '1 second ago',
                score: 0,
                replyingTo: replyTo,
                user: {
                    image: {
                        png: "./images/avatars/image-juliusomo.png",
                        webp: "./images/avatars/image-juliusomo.webp",
                    },
                    username: "juliusomo",
                },
                replies: [],
            }
            dispatch(setID());

            let rep = true;
            const new_data = data.comments?.map((ele) => {
                if (ele.id === id) {
                    ele.replies.push(new_reply);
                    rep = false;
                }
                return ele;
            })

            if (rep) {
                data.comments.forEach((ele) => {
                    const new_rep = ele.replies.map((e) => {
                        if (e.id === id) {
                            e.replies.push(new_reply);
                            rep = false;
                        }
                        return e;
                    })
                    ele.replies = [...new_rep];

                })
            }

            dispatch(updateComment(new_data));
            dispatch(rendering())
            document.getElementById(`reply${id}`).classList.add('none');
            document.getElementsByClassName('add-alert')[0].classList.remove('hide-alert');
            setTimeout(() => {
                document.getElementsByClassName('add-alert')[0].classList.add('hide-alert');
            }, 2500)
        }
    }
    return (
        <div id={`reply${id}`} className="none add-reply flex justify-between bg-[white] h-[200px] rounded p-[1rem]">
            <img className="second w-[50px] h-[50px]" src="../../images/avatars/image-juliusomo.png" alt="" />
            <textarea onChange={(e) => setValue(e.target.value)} className="first p-[.5rem] rounded border-2 flex-1 mx-[.5rem] h-[100%]" type="text" placeholder="Add comment" />
            <button onClick={(() => reply())} className="third h-[50px] py-[.5rem] px-[1rem] bg-replyTo text-white rounded">SEND</button>
        </div>
    )
}
export default Reply;