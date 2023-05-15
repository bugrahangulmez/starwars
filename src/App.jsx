import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Ships from "./pages/Ships";
import Detail from "./pages/Detail";
import "./App.css";
import Context from "./context/Context";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Ships />} />
            <Route path=":ship" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
};
export default App;
