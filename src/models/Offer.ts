export interface Offer {
    productCode: string;
    discountType: 'half-price';
    quantity: number;
}

export const offers: Offer[] = [
    { productCode: 'R01', discountType: 'half-price', quantity: 2 }
];
