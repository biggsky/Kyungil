import React, { useEffect, useState } from "react";

const useHydration = () => {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  return isRendered;
};

export default useHydration;
