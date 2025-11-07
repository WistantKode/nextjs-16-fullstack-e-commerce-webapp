
import React from "react";
import PriceFormatter from "@/components/PriceFormatter";
import { cn } from "@/lib/utils";
interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

export const PriceView = ({price,discount,className}:Props) => {
    return (
            <div className={cn('flex items-center gap-2', className)}>
                <PriceFormatter
                    amount={price}
                    className="text-shop_dark_green"
                />
                {price && discount &&
                    (
                        <PriceFormatter
                            className="text-shop_light_text line-through text-xs font-normal"
                            amount={price + (discount * price) / 100}
                        />
                    )
                }
        </div>
    );
};

export default PriceView;