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

export interface IProductCardDetails {
  url: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  soldQuantity: number;
  soldPercentage: number;
  available: number;
}

export interface FooterItem {
  title: string;
  childs: FooterItemChild[];
}

export interface FooterItemChild {
  title: string;
  url: string;
  icon?: string;
}
