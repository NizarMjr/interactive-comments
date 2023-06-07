import { deleteItem, rendering } from "@/redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const DeleteOrCancel = () => {
    const deleteID = useSelector(state => state.deleteOption);
    const dispatch = useDispatch();

    const deleteConfirmation = () => {
        dispatch(deleteItem(deleteID));
        document.getElementsByClassName('deleteOrCancel')[0].classList.add('none');
        document.getElementsByClassName('comments')[0].classList.remove('delete-option');
        dispatch(rendering())

        document.getElementsByClassName('alert')[0].classList.remove('hide-alert');
        setTimeout(() => {
            document.getElementsByClassName('alert')[0].classList.add('hide-alert');
        }, 1500)

    }
    const cancel = () => {
        document.getElementsByClassName('deleteOrCancel')[0].classList.add('none');
        document.getElementsByClassName('comments')[0].classList.remove('delete-option');
    }
    return (
        <div className="deleteOrCancel none fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[2rem] bg-[white] w-[300px] rounded">
            <h2 className="font-bold mb-[1rem]">Delete comment</h2>
            <p className="text-[.8rem] mb-[1rem] text-createdAt">Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
            <div className="flex items-center justify-between text-[white]">
                <button onClick={() => cancel()} className="text-[.8rem] px-[1rem] py-[.5rem] bg-cancel rounded">NO, CANCEL</button>
                <button onClick={() => deleteConfirmation()} className="text-[.8rem] px-[1rem] py-[.5rem] bg-delete rounded ">YES, DELETE</button>
            </div>
        </div>
    )
}
export default DeleteOrCancel;