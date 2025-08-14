import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MainLayout } from "./layouts/MainLayout";
import { Project } from "./pages/Project";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
