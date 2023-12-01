import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "./pages/Link";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);