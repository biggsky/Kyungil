import React from "react";
import Header from "@app/_layout/header";
import Footer from "@app/_layout/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="max-w-[1400px] m-auto ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
