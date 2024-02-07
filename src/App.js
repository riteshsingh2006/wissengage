import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.tsx';
import Form from './Form';
import Attendance from "./Attendance";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/feedback" element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
