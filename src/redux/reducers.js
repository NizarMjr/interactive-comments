import { Types } from "./Types";
const data = [];
const id = 5;
const deleteID = -1;
const render = false;

export const reducerData = (state = data, { type, payload, content }) => {
    switch (type) {
        case Types.GET_DATA: {
            return state;
        }
        case Types.SET_DATA: {
            state = payload;
            return state;
        }
        case Types.UPDATE_DATA: {
            state.comments.push(payload);
            return state;
        }
        case Types.UPDATE_COMMENT: {
            state.comments = payload;
            return state;
        }
        case Types.EDIT_REPLIE: {
            let nestedRep = true;
            state.comments.forEach((ele) => {
                const new_rep = ele.replies.map((e) => {
                    if (e.id === payload) {
                        nestedRep = false;
                        e.content = content;
                    }
                    return e;
                })
                ele.replies = [...new_rep];
            })
            if (nestedRep) {
                state.comments.forEach((ele) => {
                    ele.replies.forEach((e) => {
                        const new_nestedRep = e.replies.map((rep) => {
                            if (rep.id === payload)
                                rep.content = content;
                            return rep;
                        })
                        e.replies = [...new_nestedRep];
                    })
                })
            }
            return state;
        }
        case Types.DELETE_ITEM: {
            let rep = false, nestedRep = false;
            const new_data = state.comments.filter((c) => {
                if (c.id === payload) rep = true;
                return payload != c.id;
            })
            if (!rep) {
                state.comments.forEach((c) => {
                    const new_rep = c.replies.filter((ele) => {
                        if (ele.id === payload) nestedRep = true;
                        return ele.id !== payload;
                    })
                    c.replies = [...new_rep];
                })
            }
            if (!nestedRep) {
                state.comments.forEach((c) => {
                    c.replies.forEach((ele) => {
                        const nested = ele.replies.filter((e) => {
                            return e.id !== payload;
                        })
                        ele.replies = [...nested];
                    })
                })
            }
            if (rep)
                state.comments = new_data;
            return state;
        }
        default: return state;
    }
}
export const reducerID = (state = id, { type }) => {
    switch (type) {
        case Types.SET_ID: {
            state += 1;
            return state;
        }
        default: return state;
    }
}
export const reducerDeleteOption = (state = deleteID, { type, payload }) => {
    switch (type) {
        case Types.DELETE_ID: {
            state = payload;
            return state;
        } default: return state;
    }
}
export const reducerRender = (state = render, { type }) => {
    switch (type) {
        case Types.RENDER: {
            !state ? state = true : state = false;
            return state;
        }
        default: return state;
    }
}