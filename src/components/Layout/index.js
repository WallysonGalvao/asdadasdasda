import React from "react";
import { AuthProvider } from "../../lib/AuthContext";
import Header from "../Header";
import Footer from "../Footer";

import "../../styles/styles.css";

const Layout = ({ children, app = false }) => {
  return (
    <AuthProvider>
      <div className="font-sans bg-white flex flex-col min-h-screen w-full">
        <Header app={app} />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout;
