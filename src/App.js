import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
