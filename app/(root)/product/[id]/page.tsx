import { ChooseProductForm, Container, PizzaImage, ProductForm, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ChoosePizzaForm } from "@/shared/components/shared/choose-pizza-form";
import { addCartItem } from "@/shared/services/cart";
import toast from "react-hot-toast";
import router from "next/router";
import { useCartStore } from "@/shared/store";

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const {
    id
  } = params;

  const product = await prisma.product.findFirst({ where: { id: Number(id) }, include: { ingredients: true, category: { include: { products: { include: { items: true }} }}, items: true,} });

  if (!product) {
    return notFound();
  }




   

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
