import {createStore} from 'redux'
const ADD = "ADD"
const DELETE = "DELETE"

const addToDo = text => {
    return {type: ADD, text}
}

const deleteToDo = id => {
    return {type: DELETE, id}
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                {
                    text: action.text,
                    id: Date.now()
                },
                ...state
            ]
        case DELETE:
            return state.filter(toDo => toDo !== action.id);
        default:
            return state
    }
}

const store = createStore(reducer)

// store.subscribe() store 의 변화가 았을 때, 모든 것을 rerender 하는 것을 막기 위해 react-redux 가
// 필요한것!
export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store