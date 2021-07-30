import React from "react";

import { ThemeProvider } from "@emotion/react";
import { FormularioDePago } from "./views/FormularioDePago";

export default function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#88f",
        },
      }}
    >
      <FormularioDePago />
    </ThemeProvider>
  );
}
