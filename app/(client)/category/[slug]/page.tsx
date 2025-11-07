import Container from '@/components/Container'
import Title from '@/components/Title'
import React from 'react'
import CategoryProducts from "@/components/CategoryProducts";

const CategoryPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params


    return (
        <div className={'py-10'}>
            <Container>
                <Title>
                    Product By Category:{" "}
                    <span className={'font-bold text-green-600 capitalize tracking-wide'}>
                        {slug && slug}
                    </span>
                </Title>
                <CategoryProducts categories={[]} slug={slug}/>
            </Container>
        </div>
    )
}

export default CategoryPage