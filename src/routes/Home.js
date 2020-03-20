// export default () => "Home";
import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store"
import ToDo from "../components/ToDo"

const Home = ({toDos, addToDo}) => {
    const [text,
        setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        addToDo(text)
        setText("")
    }

    return (
        <Fragment>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input ty pe='text' value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (<ToDo {...toDo} key={toDo.id}/>))}
            </ul>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {toDos: state};
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

// export default connect(null, mapDispatchToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
