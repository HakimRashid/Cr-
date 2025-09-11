import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Authpage from "./pages/Authpage/Authpage";
import PageLayouts from "./Layouts/PageLayouts/PageLayouts";
import "./index.css";
import Onboardingpage from "./pages/Onboardingpage/Onboardingpage";
import Profilepage from "./pages/Profilepage/Profilepage";

function App() {
  return (
    <PageLayouts>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/onboarding" element={<Onboardingpage />} />
        <Route path="/:username" element={<Profilepage />} />
      </Routes>
    </PageLayouts>
  );
}

export default App;
