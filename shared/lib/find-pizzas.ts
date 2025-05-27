export interface GetSearchParams {
    query?: string;
    sortBy?: string;
    pizzaTypes?: string;
    sizes?: string;
    ingredients?: string;
    priceFrom?: string;
    priceTo?: string;
    page?: string;
    limit?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;8