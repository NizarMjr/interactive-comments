import { setData } from "@/redux/Actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Comments from "./Comments";
import DeleteOrCancel from "./DeleteOrCancel";
import DeleteAlert from "./alerts/DeleteAlert";
import AddAlert from "./alerts/AddAlert";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetching = async () => {
            let res = await fetch('../../data.json');
            res = await res.json();
            dispatch(setData(res));
        }
        fetching();
    }, [])
    return (
        <>
            <div className="comments"><Comments /></div>
            <DeleteOrCancel />
            <DeleteAlert />
            <AddAlert />
        </>
    )
}
export default App;