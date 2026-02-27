export interface Product {
    code: string;
    price: number;
}

export const catalogue: Product[] = [
    { code: 'R01', price: 32.95 },
    { code: 'G01', price: 24.95 },
    { code: 'B01', price: 7.95 } 
];
