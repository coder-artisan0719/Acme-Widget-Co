import { catalogue, Product } from './ProductCatalogue';
import { offers, Offer } from './Offer';

export class Basket {
    private items: Product[] = [];

    add(productCode: string): void {
        const product = catalogue.find(p => p.code === productCode);
        if (!product) {
            throw new Error(`Invalid product code: ${productCode}`);
        }
        this.items.push(product);
    }

    private applyOffers(): number {
        let total = 0;
        const itemCount: { [key: string]: number } = {};

        for (const item of this.items) {
            itemCount[item.code] = (itemCount[item.code] || 0) + 1;
            total += item.price;
        }

        offers.forEach(offer => {
            if (itemCount[offer.productCode] && itemCount[offer.productCode] >= offer.quantity) {
                const discountAmount = catalogue.find(p => p.code === offer.productCode)?.price || 0;
                total -= discountAmount * 0.5;
            }
        });

        return total;
    }

    total(): number {
        if (this.items.length === 0) {
            throw new Error('Basket is empty. Please add items to your basket.');
        }

        let total = this.applyOffers();
        const orderTotal = total;
        
        if (orderTotal >= 90) {
            return total; 
        } else if (orderTotal >= 50) {
            return total + 2.95;
        } else {
            return total + 4.95;
        }
    }   
}