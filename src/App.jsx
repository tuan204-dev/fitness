import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/404NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";
import Home from "./pages/Home/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2625',
      blur: '#ff2625cc'
    },
    primaryBlur: {
      main: '#ff262599'
    }
  },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
        <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
          <NavBar />
          {/* <HashRouter> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/exercise/:id' element={<ExerciseDetail />} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          {/* </HashRouter> */}
          <Footer />
        </Box>
      </ThemeProvider>
  );
}

export default App;
