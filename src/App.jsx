import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";
import Home from "./pages/Home/Home";
import NotFound from "./components/404NotFound/NotFound";
import NotExist from "./components/NotExist/NotExist";

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
