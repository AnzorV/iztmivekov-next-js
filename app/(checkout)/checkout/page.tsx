"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from "@/shared/components";
import { useCart } from "@/shared/hooks";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";



export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    }
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  }

  const onCLickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };



  return (
    <Container className="mt-10">
      <Title
        text="Офомление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
       
          <CheckoutCart items={items} removeCartItem={removeCartItem} onClickCountButton={onCLickCountButton} loading={loading
          } />

        
          <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

          <CheckoutAddressForm  className={loading ? 'opacity-40 pointer-events-none' : ''} />
        </div>

        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} loading={loading} />
        </div>
      </div>
        </form>
      </FormProvider>
    </Container>
  );
}
