// Vanilla JS 를 이용한 counter 진행 : html 에게 뭔가가 바뀌었다고 알려주기 위해 함수를 사용해야 한다는 것이 redux
// 가 필요해지는 지점!
import {createStore} from 'redux'

const add = document.getElementById("minus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
    console.log(count, action);
    switch (action.type) {
        case ADD:
          return count + 1;
        case MINUS:
          return count - 1;
        default:
          return count;
    }
};
const countStore = createStore(countModifier);


const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: ADD});
};

const handleMinus = () => {
    countStore.dispatch({type: MINUS});
};

console.log(countStore.getState());

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);