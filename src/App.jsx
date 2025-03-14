import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing.jsx";
import AuthPage from "./components/signin&signUp.jsx";
import YogaLandingPage from "./pages/yoga.jsx";
import Appointment from "./components/appointment.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup&signin" element={<AuthPage />} />
      <Route path="/yoga" element={<YogaLandingPage/>}></Route>
      <Route path="/appointment" element={<Appointment/>}></Route>

    </Routes>
  );
}

export default App;

