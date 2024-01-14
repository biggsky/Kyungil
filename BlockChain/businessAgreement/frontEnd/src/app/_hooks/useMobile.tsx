import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width:768px)" });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};
export default useMobile
