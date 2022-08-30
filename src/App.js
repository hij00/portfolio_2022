import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/pages/home/Home";
import { Intro } from "./components/pages/intro/Intro";
import { Renew } from "./components/pages/renewal/Renew";
import { Toy } from "./components/pages/toy/Toy";
import { GlobalStyle } from "./components/style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/introduce" element={<Intro />}></Route>
        <Route path="/toy_project" element={<Toy />}></Route>
        <Route path="/web_renewal" element={<Renew />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
