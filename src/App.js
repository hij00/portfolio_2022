import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/pages/home/Home";
import { Profile } from "./components/pages/profile/Profile";
import { Project } from "./components/pages/project/Project";
import { Site } from "./components/pages/project/Site";
import { Toy } from "./components/pages/project/Toy";
import { GlobalStyle } from "./components/style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/project" element={<Project />}></Route>
        {/* <Route path="/project/toy" element={<Toy />}></Route>
        <Route path="/project/site" element={<Site />}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
