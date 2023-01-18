import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./context/ChatProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <ChatProvider>
          <App />
        </ChatProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
