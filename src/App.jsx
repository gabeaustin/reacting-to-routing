import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/films">
                    <Films />
                </Route>

                <Route exact path="/people">
                    <People />
                </Route>

                <Route path="*">
                    {() => <h1>404 - Page Not Found</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;