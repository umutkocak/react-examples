import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Container} from "reactstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
    return (
        <Router>
            <div><Container>
                <Navi/>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/product" exact component={Dashboard}/>
                    <Route path="/cart" exact component={CartDetail}/>
                </Switch>
            </Container>
            </div>
        </Router>
    );
}

export default App;
