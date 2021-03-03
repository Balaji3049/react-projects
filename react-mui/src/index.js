import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "./ui-core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#000",
    },
  },
});

function App({ label }) {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
