import { deleteID, editRep, rendering } from "@/redux/Actions";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Replie = (props) => {
    const render_ = useSelector(state => state.render);
    const dispatch = useDispatch();
    const { rep } = props;
    const [reply, setReply] = useState(rep)
    const [value, setValue] = useState('');
    const refValue = useRef();
    const text = useRef(null);

    useEffect(() => {
        setReply(rep) //UPDATE COMPONENT
    }, [render_])

    const editComment = (id) => {
        text.current.value = reply.content;
        document.getElementById(`content${id}`).classList.add('none');
        document.getElementById(`edit${id}`).classList.remove('none');
    }
    const updateComment = (id) => {
        document.getElementById(`content${id}`).classList.remove('none');
        document.getElementById(`edit${id}`).classList.add('none');
        dispatch(editRep(id, value));
        dispatch(rendering())
    }
    const deleteReply = (id) => {
        dispatch(deleteID(id));
        document.getElementsByClassName('deleteOrCancel')[0].classList.remove('none');
        document.getElementsByClassName('comments')[0].classList.add('delete-option');
    }
    const replyTo = (id) => {
        document.getElementById(`reply${id}`).classList.remove('none');
    }
    return (
        <>
            <main>
                <div className="replie bg-[white] mb-[1rem]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center mb-[1rem]">
                            <img src={`../../${reply.user.image.png}`} alt='logo' className="mr-[1rem] w-[50px]" />
                            <h3 className="mr-[1rem] text-username font-bold">{reply.user.username}</h3>
                            {reply.user.username === "juliusomo" ? <span className="text-white bg-replyTo font-bold p-[.15rem] mr-[1rem] rounded">you</span> : ''}
                            <p className="text-createdAt text-[.9rem] w-[100px]">{rep.createdAt}</p>
                        </div>
                        <div className="flex items-center">
                            {reply.user.username !== "juliusomo" ? <div className="reply flex items-center">
                                <img src={`../../icon-reply.svg`} alt="" />
                                <button onClick={() => replyTo(reply.id)} className="font-bold text-replyTo ml-[.5rem]" >Reply</button>
                            </div> : <div className="delete-edit flex items-center justify-between">
                                <div className="mx-[1rem] flex items-center justify-between">
                                    <img src="../../icon-delete.svg" alt="" />
                                    <button onClick={() => deleteReply(reply.id)} className="mx-[.5rem] text-delete font-bold">Delete</button>
                                </div>
                                <div className="mx-[1rem] flex items-center justify-between">
                                    <img src="../../icon-edit.svg" alt="" />
                                    <button onClick={() => editComment(reply.id)} className="mx-[.5rem] text-edit font-bold">Edit</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <p ref={refValue} id={`content${reply.id}`} className="text-[.95rem] text-createdAt"><span className="font-bold text-replyTo">{`@${reply.replyingTo} `}</span>{reply.content}</p>
                    {reply.user.username === "juliusomo" ?
                        <div id={`edit${reply.id}`} className="flex items-center update none">
                            <textarea ref={text} onChange={(e) => setValue(e.target.value)} className="p-[.5rem] rounded border-2 flex-1 mx-[1rem] h-[100%]" value={value} type="text" placeholder="Edit comment" />
                            <button className="h-[50px] py-[.5rem] px-[1rem] bg-replyTo text-white rounded" onClick={() => updateComment(reply.id)}>Update</button>
                        </div> : ''}
                </div>
            </main>
        </>



    )
}
export default Replie;