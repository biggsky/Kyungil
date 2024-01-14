import Footer from "@app/_layout/footer";
import Header from "@app/_layout/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="max-w-[1400px] m-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
