import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Works from "./pages/Works";
import WorksCategory from "./pages/WorksCategory";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/works" element={<Works />}>
            <Route index element={<Navigate to="room-design" replace />} />
            <Route path=":slug" element={<WorksCategory />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}