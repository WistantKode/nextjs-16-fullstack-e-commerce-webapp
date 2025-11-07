"use client";

import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import {motion, AnimatePresence} from "motion/react";
import {client} from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import Container from "./Container";
import HomeTabbar from "./HomeTabbar";
import {productType} from "@/constants/data";
import {Product} from "@/sanity.types";
import {Skeleton} from "@/components/ui/skeleton";

const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

    useEffect(() => {
        const query = `*[_type == "product" && variant == $variant] | order(name asc){
          ...,"categories": categories[]->title
        }`;
        const params = {variant: selectedTab.toLowerCase()};

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await client.fetch(query, params);
                setProducts(await response);
            } catch (error) {
                console.log("Product fetching Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedTab]);

    return (
        <Container className="flex flex-col lg:px-0 my-10">
            <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab}/>
            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
                    {Array.from({length: 10}).map((_, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <Skeleton className="h-[280px] w-full rounded-xl"/>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[150px]"/>
                            </div>
                        </div>
                    ))}
                </div>
            ) : products?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
                    <>
                        {products?.map((product) => (
                            <AnimatePresence key={product?._id}>
                                <motion.div
                                    layout
                                    initial={{opacity: 0.2}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    <ProductCard key={product?._id} product={product}/>
                                </motion.div>
                            </AnimatePresence>
                        ))}
                    </>
                </div>
            ) : (
                <NoProductAvailable selectedTab={selectedTab}/>
            )}
        </Container>
    );
};

export default ProductGrid;
