const { combineReducers } = require("redux");
import { reducerData, reducerID, reducerDeleteOption, reducerRender } from "./reducers";

const reducers = combineReducers({
    data: reducerData,
    ID: reducerID,
    deleteOption: reducerDeleteOption,
    render: reducerRender,
})
export default reducers;