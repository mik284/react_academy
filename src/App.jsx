import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar";
import { Outlet, Route, Routes } from "react-router";
import Contact from "./pages/Contact/Contact";
import Users from "./pages/users/Users";
import Login from "./pages/Login/Login";
import withRandomTheme from "./HOC/RandomTheme";



const Layout = () => {
  return (
   <>
      <Navbar />
      <Outlet />
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
      </Route>
        <Route index path="/login" element={<Login />} />
    </Routes> 
  );
}

export default withRandomTheme(App)
