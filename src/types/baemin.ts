export interface IShopInfo {
  name: string;
  shopId: number;
  groupMenus: IGroupMenu[];
}

export interface IGroupMenu {
  name: string;
  menuGroupId: number;
  description: string;
  menus: IMenu[];
}

export interface IMenu {
  menuId: number;
  name: string;
  images: IImage[];
  description: string;
  menuPrices: IPrice[];
  optionGroups: IOptionGroup[];
}

export interface IImage {
  url: string;
  width: number | null;
  height: number | null;
  type: string;
}

export interface IPrice {
  name: string;
  price: string;
  pricePhraseType: string;
}

export interface IOptionGroup {
  optionGroupId: number;
  name: string;
  minOrderableQuantity: number;
  maxOrderableQuantity: number;
  options: IOption[];
}

export interface IOption {
  optionId: number;
  name: string;
  price: number;
}
