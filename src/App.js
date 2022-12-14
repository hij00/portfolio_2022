import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/pages/home/Home";
import { Profile } from "./components/pages/profile/Profile";
import { Project } from "./components/pages/project/Project";
import { GlobalStyle } from "./components/styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
