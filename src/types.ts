export type User = {
    _id: string,
    email: string,
    name: string,
    addressLine1: string,
    city: string,
    country: string,
}

export type MenuItems = {
    _id: string,
    name: string,
    price: string,
}

export type Restaurant = {
    _id: String,
    user: string,
    restaurantName: string,
    city: string,
    country: string,
    deliveryPrice: number,
    estimationDeliveryTime: number,
    cuisines: string[],
    menuItems: MenuItems[],
    imageUrl: string,
    lastUpdated: string,
}

export type RestaurantSearchResponse = {
    data: Restaurant[];
    pagination: {
        total: number;
        page: number;
        pages: number;
    }
}