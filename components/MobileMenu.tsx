"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import { useMenu } from "@/components/MenuProvider";

export const MobileMenu = () => {
    const { openMenu } = useMenu();
    return (
        <button onClick={openMenu}>
            <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer" />
        </button>
    );
};

export default MobileMenu;
