
import React from "react";
import {getDealProducts} from "@/sanity/queries";
import Container from "@/components/Container";
import Title from "@/components/Title";
import ProductCard from "@/components/ProductCard";

const DealPage = async () => {
    const products =  await getDealProducts();
    return (
        <div className="py-10 bg-shop_lighter_bg">
            <Container>
                <Title className={'mb-5 underline underline-offset-4 decoration-[1px] text-base uppercase tracking-wider'}>
                    Hot Deals of the week
                </Title>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {products?.map((product) => (
                        <ProductCard
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            key={product?._id}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            product={product}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default DealPage;