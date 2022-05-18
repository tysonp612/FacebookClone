import { Route, Routes } from "react-router-dom";
//pages
import { LoginPage } from "./pages/login/login.page";
import { HomePage } from "./pages/home/home.page";
import { ProfilePage } from "./pages/profile/profile.page";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
