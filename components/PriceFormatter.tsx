import {cn} from "@/lib/utils";

interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormatter = ({amount, className}: Props) => {
    if (!amount) return null;

    const formattedPrice = Number(amount).toLocaleString("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 0, // determine le nombre de 0 apres la virgule
    });

    return (
        <span className={cn("text-sm font-semibold text-darkColor", className)}>
             {formattedPrice}
        </span>
    );
};

export default PriceFormatter;
