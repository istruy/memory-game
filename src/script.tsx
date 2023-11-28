import * as React from "react";
import App from "./Components/App/App";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
