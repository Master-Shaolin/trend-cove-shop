export interface NavBarItem {
  id: string;
  title: string;
  url: string;
  hasMenu: boolean;
  menu?: NavBarItemMenu[];
}

export interface NavBarItemMenu {
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
