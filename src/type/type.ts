export interface ILinks {
  href: string
  name: string
  icon?: string
}

interface IPrice {
  newPrice: number
  oldPrice: number
}
interface IImg {
  default: string
  webP: string
}
export interface IData {
  colors?: string[]
  gender?: string
  name: string
  label?: string
  price: IPrice
  img: IImg
  id: number
  description?: string
}

export interface ISelect {
  name: string
}

export interface LoginValues {
  email: string;
  password: string;
  name?: string;
  tel?: number;
}
