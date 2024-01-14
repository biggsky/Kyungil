/* eslint-disable @next/next/no-img-element */
"use client";
import useMobile from "@app/_hooks/useMobile";
import React, { useEffect, useState } from "react";
import MobileFooter from "./contents/MobileFooter";
import PcFooter from "./contents/PcFooter";

const Footer: React.FC = () => {
  const isMobile = useMobile();
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return <>{isMobile ? <MobileFooter /> : <PcFooter />}</>;
};

export default Footer;
