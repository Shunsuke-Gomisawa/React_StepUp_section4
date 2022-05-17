import { CssModules } from "./conponents/CssModules";
import { InlineStyle } from "./conponents/InlineStyle";
import { StyledComponents } from "./conponents/StyledComponents";
import { StyledJsx } from "./conponents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
