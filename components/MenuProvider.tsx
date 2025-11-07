"use client";

import React, {createContext, useContext, useState, ReactNode} from "react";
import SideMenu from "@/components/SideMenu";

interface MenuContextType {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

export const MenuProvider = ({children}: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    return (
        <MenuContext.Provider value={{isOpen, openMenu, closeMenu}}>
            {children}
            <SideMenu isOpen={isOpen} onClose={closeMenu}/>
        </MenuContext.Provider>
    );
};
