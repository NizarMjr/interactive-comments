import { Types } from "./Types";

export const getData = () => {
    return {
        type: Types.GET_DATA,
    }
}
export const setData = (payload) => {
    return {
        type: Types.SET_DATA,
        payload: payload,
    }
}
export const updateData = (payload) => {
    return {
        type: Types.UPDATE_DATA,
        payload: payload,
    }
}
export const setID = () => {
    return {
        type: Types.SET_ID,
    }
}
export const deleteItem = (id) => {
    return {
        type: Types.DELETE_ITEM,
        payload: id,
    }
}
export const updateComment = (payload) => {
    return {
        type: Types.UPDATE_COMMENT,
        payload: payload,
    }
}
export const editRep = (id, content) => {
    return {
        type: Types.EDIT_REPLIE,
        payload: id,
        content: content,
    }
}
export const deleteRep = (parentID, id) => {
    return {
        type: Types.DELETE_REPlY,
        payload1: parentID,
        payload2: id,
    }
}
export const deleteID = (payload) => {
    return {
        type: Types.DELETE_ID,
        payload: payload,
    }
}
export const rendering = () => {
    return {
        type: Types.RENDER,
    }
}