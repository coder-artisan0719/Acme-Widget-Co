import React from 'react';

interface ProductProps {
    code: string;
    price: number;
    name: string;
}

const Product: React.FC<ProductProps> = ({ code, price, name }) => {
    const colorClass =
        code === 'R01' ? 'bg-red-500' : code === 'G01' ? 'bg-green-500' : 'bg-blue-500';

    return (
        <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
                <span
                    className={`h-2.5 w-2.5 rounded-full ${colorClass}`}
                    aria-hidden="true"
                />
                <div className="flex items-center gap-3">
                    <div>
                        <h2 className="text-sm font-semibold text-slate-900">{name}</h2>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                        {code}
                    </span>
                </div>
            </div>
            <p className="text-sm font-semibold text-slate-900">
                ${price.toFixed(2)}
            </p>
        </div>
    );
};

export default Product;
