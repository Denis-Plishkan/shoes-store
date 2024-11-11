export function headerData() {
    const linksTop = [
        { href: '/404', name: 'О магазине' },
        { href: '/404', name: 'Наш блог' },
        { href: '/404', name: 'Доставка' },
        { href: '/404', name: 'Оплата' },
        { href: '/404', name: 'Контакты' },
        { href: '/404', name: 'Индивидуальный заказ' },
    ];
    const links = [
        { href: '/catalog-man', name: 'Мужские' },
        { href: '/catalog-woman', name: 'Женские' },
        { href: '/catalog-children', name: 'Детские' },
        { href: '/catalog-sale', name: 'Распродажа' },
    ];
    const icons = [
        { href: '/like-page', icon: 'like' },
        { href: '/basket', icon: 'basket' },
    ];
    const summer = [
        { href: '/404', name: 'Для бега' },
        { href: '/404', name: 'Повседневная' },
        { href: '/404', name: 'Треккинговая' },
        { href: '/404', name: 'Для футбола' },
        { href: '/404', name: 'Для волейбола' },
        { href: '/404', name: 'Для баскетбола' },
        { href: '/404', name: 'Для тенниса' },
        { href: '/404', name: 'Для водных видов спорта' },
        { href: '/404', name: 'Спортивный' },
        { href: '/404', name: 'Для бега' },
    ];
    const demiSeason = [
        { href: '/404', name: 'Демисезон' },
        { href: '/404', name: 'Для бега' },
        { href: '/404', name: 'Повседневная' },
        { href: '/404', name: 'Треккинговая' },
        { href: '/404', name: 'Кожаные' },
    ];
    const winter = [
        { href: '/404', name: 'Утепленные' },
        { href: '/404', name: 'Повседневная' },
        { href: '/404', name: 'Кожаные' },
    ];
    const model = [
        { href: '/404', name: 'Nike Air Force 1' },
        { href: '/404', name: 'Nike SB Dunk Low' },
        { href: '/404', name: 'Nike Air Max 90' },
        { href: '/404', name: 'NIke Shox' },
        { href: '/404', name: 'Nike Blazer' },
        { href: '/404', name: 'Nike M2K Tekno' },
        { href: '/404', name: 'Nike Air Max Plus' },
        { href: '/404', name: 'Nike Air Huarache' },
        { href: '/404', name: 'Nike Air Zoom 2K' },
        { href: '/404', name: 'Nike Air Presto' },
    ];
    const photo = {
        webp: new URL('../assets/img/header-shoes.webp', import.meta.url),
        png: new URL('../assets/img/header-shoes.png', import.meta.url),
    };
    return { linksTop, links, icons, summer, demiSeason, winter, model, photo };
}
export function CatalogData() {
    const selectColors = [
        { name: 'Белый' },
        { name: 'Синий' },
        { name: 'Черный' },
        { name: 'Серый' },
        { name: 'Розовый' },
        { name: 'Красный' },
    ];
    const selectPrice = [
        { name: 'Цена по убыванию' },
        { name: 'Цена по возрастанию' },
    ];
    const selectGender = [
        { name: 'Мужские' },
        { name: 'Женские' },
        { name: 'Детские' },
    ];
    return { selectColors, selectPrice, selectGender };
}
