import { ILinks } from '../type/type.ts'

export function headerData() {
  const linksTop: ILinks[] = [
    { href: '#', name: 'О магазине' },
    { href: '#', name: 'Наш блог' },
    { href: '#', name: 'Доставка' },
    { href: '#', name: 'Оплата' },
    { href: '#', name: 'Контакты' },
    { href: '#', name: 'Индивидуальный заказ' },
  ]

  const links: ILinks[] = [
    { href: '#', name: 'Мужские' },
    { href: '#', name: 'Женские' },
    { href: '#', name: 'Детские' },
    { href: '#', name: 'Распродажа' },
  ]

  const icons = [
    { href: '#', icon: 'like' },
    { href: '#', icon: 'basket' },
  ]

  const summer: ILinks[] = [
    { href: '#', name: 'Лето' },
    { href: '#', name: 'Для бега' },
    { href: '#', name: 'Повседневная' },
    { href: '#', name: 'Треккинговая' },
    { href: '#', name: 'Для футбола' },
    { href: '#', name: 'Для волейбола' },
    { href: '#', name: 'Для баскетбола' },
    { href: '#', name: 'Для тенниса' },
    { href: '#', name: 'Для водных видов спорта' },
    { href: '#', name: 'Спортивный' },
    { href: '#', name: 'Для бега' },
  ]

  const demiSeason: ILinks[] = [
    { href: '#', name: 'Демисезон' },
    { href: '#', name: 'Для бега' },
    { href: '#', name: 'Повседневная' },
    { href: '#', name: 'Треккинговая' },
    { href: '#', name: 'Кожаные' },
    { href: '#', name: 'Зима' },
    { href: '#', name: 'Утепленные' },
    { href: '#', name: 'Повседневная' },
    { href: '#', name: 'Кожаные' },
  ]

  const model: ILinks[] = [
    { href: '#', name: 'Модели' },
    { href: '#', name: 'Nike Air Force 1' },
    { href: '#', name: 'Nike SB Dunk Low' },
    { href: '#', name: 'Nike Air Max 90' },
    { href: '#', name: 'NIke Shox' },
    { href: '#', name: 'Nike Blazer' },
    { href: '#', name: 'Nike M2K Tekno' },
    { href: '#', name: 'Nike Air Max Plus' },
    { href: '#', name: 'Nike Air Huarache' },
    { href: '#', name: 'Nike Air Zoom 2K' },
    { href: '#', name: 'Nike Air Presto' },
  ]

  return { linksTop, links, icons, summer, demiSeason, model }
}
