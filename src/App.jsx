import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
