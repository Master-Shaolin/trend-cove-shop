export interface NavBarItem {
  id: string;
  title: string;
  url: string;
  hasMenu: boolean;
  menus?: NavBarItemMenu[];
}

export interface NavBarItemMenu {
  submenus: NavBarSubMenu[];
}

export interface NavBarSubMenu {
  id: string;
  title: string;
  url: string;
  childs?: NavBarItemMenuChild[];
}

export interface NavBarItemMenuChild {
  id: string;
  title: string;
  url: string;
}
