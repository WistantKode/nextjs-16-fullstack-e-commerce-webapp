import {cn} from "@/lib/utils";
import React from "react";
import Link from "next/link";

const Logo = ({
                  className,
                  spanDesign,
              }: {
    className?: string;
    spanDesign?: string;
}) => {
    return (
        <Link href="/" className={'inline-flex items-center justify-center'}>
            <h2 className={cn(
                "text-2xl text-shop_dark_green font-black tracking-wider hover:text-shop_light_green cursor-pointer hoverEffect group font-sans",
                className
            )}>
                WIS<span className={cn(
                "text-shop_light_green group-hover:text-darkColor hoverEffect",
                spanDesign
            )}>
            TANT
        </span>
            </h2>
        </Link>
    )
};

export default Logo;
