import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from "../routes/Home"
import Detail from "../routes/Detail"

const App = () => {
    return (
        <Router>
            {/* 각 컴포넌트에 react-router 에 의해 prop 이 주어진다. */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/:id" exact component={Detail}></Route>
        </Router>
    )
}

export default App