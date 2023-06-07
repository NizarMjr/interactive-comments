import { deleteID, } from "@/redux/Actions";
import { useRef, useState } from "react";
import { useDispatch, } from "react-redux";

const Comment = (props) => {
    const dispatch = useDispatch();
    const { id, content, createdAt, user } = props.comment;
    const [contenT, setContenT] = useState(content);
    const [edit, setEdit] = useState(content);
    const text = useRef(null);

    const deleteComment = (id) => {
        dispatch(deleteID(id))
        document.getElementsByClassName('deleteOrCancel')[0].classList.remove('none');
        document.getElementsByClassName('comments')[0].classList.add('delete-option');
    }
    const editComment = (id) => {
        text.current.value = contenT;
        document.getElementById(`content${id}`).classList.add('none');
        document.getElementById(`edit${id}`).classList.remove('none');
    }
    const updateComment = (edited) => {
        setContenT(edited);
        document.getElementById(`content${id}`).classList.remove('none');
        document.getElementById(`edit${id}`).classList.add('none');
    }
    const replyTo = () => {
        document.getElementById(`reply${id}`).classList.remove('none');
    }
    return (
        <>
            <main className="flex-1">
                <div className="flex justify-between items-center">
                    <div className="flex items-center mb-[1rem]">
                        <img src={`../../${user.image.png}`} alt='logo' className="mr-[1rem] w-[50px]" />
                        <h3 className="mr-[1rem] text-username font-bold">{user.username}</h3>
                        {user.username === "juliusomo" ? <span className="text-white bg-replyTo font-bold p-[.15rem] mr-[1rem] rounded">you</span> : ''}
                        <p className="text-createdAt">{createdAt}</p>
                    </div>
                    {user.username !== "juliusomo" ? <div className="flex items-center">
                        <div className="reply flex items-center">
                            <img src={`../../icon-reply.svg`} alt="" />
                            <button onClick={() => replyTo(id)} className="font-bold text-replyTo ml-[.5rem]" >Reply</button>
                        </div>
                    </div> : <div className="delete-edit relative flex items-center justify-between">
                        <div className="mx-[1rem] flex items-center justify-between">
                            <img src="../../icon-delete.svg" alt="" />
                            <button onClick={() => deleteComment(id)} className="mx-[.5rem] text-delete font-bold">Delete</button>
                        </div>
                        <div className="mx-[1rem] flex items-center justify-between">
                            <img src="../../icon-edit.svg" alt="" />
                            <button onClick={() => editComment(id)} className="mx-[.5rem] text-edit font-bold">Edit</button>
                        </div>
                    </div>}
                </div>
                <p id={`content${id}`} className="text-[.95rem] text-createdAt">{contenT}</p>
                {user.username === "juliusomo" ?
                    <div id={`edit${id}`} className="flex items-center update none">
                        <textarea ref={text} className="p-[.5rem] rounded border-2 flex-1 mx-[1rem] h-[100%]" value={edit} onChange={(e) => setEdit(e.target.value)} type="text" placeholder="Edit comment" />
                        <button className="h-[50px] py-[.5rem] px-[1rem] bg-replyTo text-white rounded" onClick={() => updateComment(edit)}>Update</button>
                    </div> : ''}
            </main>
        </>

    )
}
export default Comment;