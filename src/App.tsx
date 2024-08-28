import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import GeneratorPage from "./pages/GeneratorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<GeneratorPage />} path="/generator" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
