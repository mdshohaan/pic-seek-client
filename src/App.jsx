import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/Root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
