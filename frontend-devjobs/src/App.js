import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import { JobDetails } from "./pages/JobDetails";
import { JobDetail } from "./pages/JobDetail";
import { DarkModeProvider } from "./components/contexts/DarkModeContext";
import Job404Page from "./pages/Job404Page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DarkModeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobdetails" element={<JobDetails />} />
            <Route path="/jobdetail/:id" element={<JobDetail />} />
            <Route path="*" element={<Job404Page />} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
