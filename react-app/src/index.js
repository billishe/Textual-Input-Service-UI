import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import NamedEntityDisambiguation from "./components/NamedEntityDisambiguation";
import SemanticModeling from "./components/SemanticModelling";
import { setPriority } from "os";
import TopicAnalysis from "./components/TopicAnanlysis";
import NetworkAnalysis from "./components/NetworkAnalysis";

ReactDOM.render(<TopicAnalysis />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
