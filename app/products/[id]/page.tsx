import { prisma } from "@/prisma/prisma-client"

export default async function ProductPage({ params: { id } }: { params: { id: string } } ) {
    const product = await prisma.product.findFirst({ where: {id: Number(id)} });

    if (!product) return <p>Product not found</p>;

    return <p>Product {product?.name}</p>;
}
