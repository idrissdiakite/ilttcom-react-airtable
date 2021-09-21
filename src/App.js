import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Track from "./pages/Track";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/track" exact component={Track} />
        <Route path="/track/:id" component={Track} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
