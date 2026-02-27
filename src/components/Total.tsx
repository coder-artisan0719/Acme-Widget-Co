import React from 'react';
import { Icon } from '@iconify/react';

interface TotalProps {
    totalAmount: number;
    itemCount: number;
}

const Total: React.FC<TotalProps> = ({ totalAmount, itemCount }) => {
    const formattedTotal = totalAmount.toFixed(2);

    return (
        <div className="mt-4 rounded-2xl bg-[#00c8c8] px-6 py-5 text-white shadow-sm">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                        <Icon
                            icon="hugeicons:shopping-basket-add-02"
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </div>
                    <div>
                        <p className="text-xs text-green-100">
                            {itemCount} {itemCount === 1 ? 'item' : 'items'} in basket
                        </p>
                        <p className="text-lg font-semibold">Total</p>
                    </div>
                </div>
                <p className="text-2xl font-extrabold tabular-nums">${formattedTotal}</p>
            </div>
        </div>
    );
};

export default Total;
