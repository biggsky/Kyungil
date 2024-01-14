import { NextRouter } from "next/router";

export interface IPcDropMenu {
  label: string;
  dropDownMenuArr: Array;
  openMenuName: string;
  openMenuNameHandler: (name: string) => void;
}

export interface IDropMenuProps {
  router: AppRouterInstance;
}

export interface IopenToggle {
  openToggle: boolean;
  key: string;
}
export interface ISubMenuContent {
  name: string;
  href: string;
}
// 서브메뉴 인터페이스
export interface IsubMenu {
  0: Array<ISubMenuContent>;
  1: Array<ISubMenuContent>;
  2: Array<ISubMenuContent>;
  [key: number]: Array<ISubMenuContent>;
}

export interface IMobileDropMenuProps {
  isMenuOpen: boolean;
  router: NextRouter;
}

export interface IDropDownMenuData {
  name: string;
  href: string;
}
export interface IDropDownMenuDataObj {
  blockchain: Array<IDropDownMenuData>;
  token: Array<IDropDownMenuData>;
  NFT: Array<IDropDownMenuData>;
}
