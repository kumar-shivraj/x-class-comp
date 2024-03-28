import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import CounterApp from "./CounterApp";
import CounterAppClass from "./CounterAppClass";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <CounterApp /> */}
    <CounterAppClass />
  </StrictMode>
);
