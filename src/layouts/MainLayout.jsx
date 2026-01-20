import { Outlet } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkMode from "../shared/DarkMode";
const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="dark:bg-[#000000]">
      <header className="h-16">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-352px)]">
        <Outlet />
        <DarkMode />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
