//@flow
import * as React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MUIButton from "@material-ui/core/Button";

type Props = {
  children: string,
  disabled: boolean,
  color: "primary" | "secondary",
  variant: "contained" | "outlined",
  size: "large" | "medium" | "small",
};

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1f7ead",
    },
    secondary: {
      main: "#a254b6",
    },
  },
});

const Button = (props: Props): React$Element<any> => {
  if (props.disabled) {
    return (
      <ThemeProvider theme={Theme}>
        <MUIButton variant={props.variant} disabled>
          {props.children}
        </MUIButton>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={Theme}>
      <MUIButton variant={props.variant} color={props.color} size={props.size}>
        {props.children}
      </MUIButton>
    </ThemeProvider>
  );
};

export default Button;
