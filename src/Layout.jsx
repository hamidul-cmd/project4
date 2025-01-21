import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="font-pro bg-white__97">
        <div className="main__container max-w-wrapper m-auto px-4 xll:px-20 3xl:px-40.2">
        <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
