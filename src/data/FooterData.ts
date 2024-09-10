export function footerData() {
  const infoLinks = [
    { href: '#', name: 'О магазине' },
    { href: '#', name: 'Наш блог' },
    { href: '#', name: 'Доставка' },
    { href: '#', name: 'Оплата' },
    { href: '#', name: 'Контакты' },
  ]
  const itemLinks = [
    { href: '#', name: 'Каталог' },
    { href: '#', name: 'Мужские' },
    { href: '#', name: 'Женские' },
    { href: '#', name: 'Детские' },
    { href: '#', name: 'Распродажа' },
  ]
  const shopLinks = [
    { href: '#', name: 'Личный кабинет' },
    { href: '#', name: 'Избранное' },
    { href: '#', name: 'Корзина' },
  ]

  const social = [
    { href: '#', icon: 'instagram' },
    { href: '#', icon: 'vk' },
    { href: '#', icon: 'twitter' },
  ]

  const photo = {
    webp: new URL('../assets/img/footer-logo.webp', import.meta.url),
    png: new URL('../assets/img/footer-logo.png', import.meta.url),
  }

  return { infoLinks, itemLinks, shopLinks, social, photo }
}
