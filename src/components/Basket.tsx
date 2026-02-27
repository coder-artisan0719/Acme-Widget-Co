import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Basket } from '../models/Basket';
import Product from './Product';
import Total from './Total';

const BasketComponent: React.FC = () => {
    const [basket] = useState(new Basket());
    const [code, setCode] = useState('');
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [error, setError] = useState('');

    const handleAddToBasket = () => {
        const trimmed = code.trim().toUpperCase();

        if (!trimmed) {
            setError('Please enter a product code.');
            return;
        }

        try {
            basket.add(trimmed);
            setTotal(basket.total());
            setItemCount((prev) => prev + 1);
            setCode('');
            setError('');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <section aria-label="Shopping basket" className="space-y-8">
            <header className="flex items-start gap-3 items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00c8c8] text-white shadow-sm">
                    <Icon
                        icon="mdi:cart-outline"
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900">Shopping Basket</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Add products by code or browse below
                    </p>
                </div>
            </header>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1">
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter product code (e.g. R01)"
                        aria-label="Product code"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-[#00c8c8]"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleAddToBasket}
                    className="inline-flex items-center justify-center rounded-xl bg-[#00c8c8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#023051] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7f5]"
                >
                    <Icon
                        icon="mdi:plus"
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                    />
                    <span>Add to Basket</span>
                </button>
            </div>

            {error && (
                <p className="text-sm font-medium text-red-600" role="alert">
                    {error}
                </p>
            )}

            <section aria-label="Available products" className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Available products
                </p>
                <div className="space-y-3">
                    <Product code="R01" price={32.95} name="Red Widget" />
                    <Product code="G01" price={24.95} name="Green Widget" />
                    <Product code="B01" price={7.95} name="Blue Widget" />
                </div>
            </section>

            <Total totalAmount={total} itemCount={itemCount} />
        </section>
    );
};

export default BasketComponent;