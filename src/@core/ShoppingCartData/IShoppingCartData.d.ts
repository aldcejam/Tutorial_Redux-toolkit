type IDProps = string
type ShoppingCartItemsProps = {
    [itemName: string]: string;
}

interface IShoppingCartDataProps {
    ID: IDProps;
    shoppingCartItems: ShoppingCartItemsProps;
}

export { IShoppingCartDataProps, IDProps, ShoppingCartItemsProps}