import React, { FC, useEffect } from "react";
import Logo from "@/components/Logo";
import { headerData } from "@/constants/data";
import SocialMedia from "@/components/SocialMedia";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    // Effet pour bloquer le défilement du body lorsque le menu est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // Nettoyage de l'effet
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50"
                        aria-hidden="true"
                    />

                    {/* Contenu du menu */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-y-0 left-0 z-50 w-72 bg-white h-screen p-10 border-r border-shop_light_green flex flex-col gap-6"
                    >
                        <div className="flex items-center justify-between gap-5">
                            <Logo className="" spanDesign="group-hover:text-white" />
                            <button
                                onClick={onClose}
                                className="hover:text-shop_light_green hoverEffect font-bold cursor-pointer"
                            >
                                X
                            </button>
                        </div>

                        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
                            {headerData?.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.href}
                                    onClick={onClose} // Ferme le menu lors de la navigation
                                    className={`hover:text-shop_light_green hoverEffect ${
                                        pathname === item?.href && "text-shop_light_green"
                                    }`}
                                >
                                    {item?.title}
                                </Link>
                            ))}
                        </div>
                        <SocialMedia />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SideMenu;
