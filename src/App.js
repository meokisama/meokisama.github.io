import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage2Light from "./pages/Homepage2Light";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage2Light />
        </Route>
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
