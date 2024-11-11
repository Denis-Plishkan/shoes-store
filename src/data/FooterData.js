export function footerData() {
    const infoLinks = [
        { href: '/404', name: 'О магазине' },
        { href: '/404', name: 'Наш блог' },
        { href: '/404', name: 'Доставка' },
        { href: '/404', name: 'Оплата' },
        { href: '/404', name: 'Контакты' },
    ];
    const itemLinks = [
        { href: '/catalog', name: 'Каталог' },
        { href: '/catalog-man', name: 'Мужские' },
        { href: '/catalog-woman', name: 'Женские' },
        { href: '/catalog-children', name: 'Детские' },
        { href: '/catalog-sale', name: 'Распродажа' },
    ];
    const shopLinks = [
        { href: '/404', name: 'Личный кабинет' },
        { href: '/like-page', name: 'Избранное' },
        { href: '/basket', name: 'Корзина' },
    ];
    const social = [
        { href: '/404', icon: 'instagram' },
        { href: '/404', icon: 'vk' },
        { href: '/404', icon: 'twitter' },
    ];
    const photo = {
        webp: new URL('../assets/img/footer-logo.webp', import.meta.url),
        png: new URL('../assets/img/footer-logo.png', import.meta.url),
    };
    return { infoLinks, itemLinks, shopLinks, social, photo };
}
