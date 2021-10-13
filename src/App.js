import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/track" exact component={Track} />
          <Route path="/track/:id" component={Track} />
          <Route path="/gallerie" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
