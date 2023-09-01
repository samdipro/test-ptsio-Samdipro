import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/addit/:id" element={<EditPage></EditPage>} />
      </Routes>
    </>
  );
}

export default App;
