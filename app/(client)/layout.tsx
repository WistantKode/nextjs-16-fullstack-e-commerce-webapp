import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { MenuProvider } from "@/components/MenuProvider";

export const metadata: Metadata = {
    title: {
        template: "%s - ShopDO online store",
        default: "ShopDO online store",
    },
    description: "Shop online store, Your one stop shop for all your needs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <MenuProvider>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </MenuProvider>
        </ClerkProvider>
    );
}
