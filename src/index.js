import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "typeface-raleway";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route exact path="/post/404" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
