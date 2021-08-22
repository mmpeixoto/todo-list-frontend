import { GlobalStyle } from "./global";
import { Route } from "react-router-dom";
import { Main } from "./pages/Main/index";
import { Login } from "./pages/Login/index";

export function App() {
  return (
    <>
      <Route exact path="/Home" component={Main} />
      <Route exact path="/" component={Login} />
      <GlobalStyle />
    </>
  );
}
