import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./routes/routes.jsx";
import {Routes , Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes /> 
    </div>
  );
}

export default App;