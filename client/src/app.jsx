import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerProfile from "./pages/FreelancerProfile";
import PostJob from "./pages/PostJob";

function App() {
return ( <BrowserRouter>

```
  <Navbar />

  <Routes>

    {/* Home */}
    <Route
      path="/"
      element={<Home />}
    />

    {/* Jobs */}
    <Route
      path="/jobs"
      element={<Jobs />}
    />

    {/* Messages */}
    <Route
      path="/messages"
      element={<Messages />}
    />

    {/* Freelancer Dashboard */}
    <Route
      path="/freelancer-dashboard"
      element={<FreelancerDashboard />}
    />

    {/* Client Dashboard */}
    <Route
      path="/client-dashboard"
      element={<ClientDashboard />}
    />

    {/* Profile */}
    <Route
      path="/profile"
      element={<FreelancerProfile />}
    />

    {/* Post Job */}
    <Route
      path="/post-job"
      element={<PostJob />}
    />

  </Routes>

</BrowserRouter>

);
}

export default App;