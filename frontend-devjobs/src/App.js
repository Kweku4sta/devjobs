import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import { JobDetails } from "./pages/JobDetails";
import { JobDetail } from "./pages/JobDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/jobdetail/:id" element={<JobDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
