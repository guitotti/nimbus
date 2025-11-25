import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <Theme>
      <Home />
    </Theme>
  );
};

export default App;
