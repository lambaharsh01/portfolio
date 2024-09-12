import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from './portfolio';
import Project from "./project";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
