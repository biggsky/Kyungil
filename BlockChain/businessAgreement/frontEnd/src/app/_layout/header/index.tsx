"use client";
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import ham from "../../../../public/burger.png";
import React from "react";
import Image from "next/image";
import useMobile from "@app/_hooks/useMobile";
import PcDropDownMenu from "./content/PcDropDownMenu";
import MobileHeader from "./content/MobileHeader";
import PcHeader from "./content/PcHeader";
import { useRouter } from "next/navigation";
import useHydration from "@app/_hooks/useHydration";

const Header = () => {
  const router = useRouter();

  const isMobile = useMobile();
  const isRendered = useHydration();
  return (
    <>
      {isMobile ? (
        <MobileHeader router={router} />
      ) : (
        <PcHeader router={router} />
      )}
    </>
  );
};

export default Header;
