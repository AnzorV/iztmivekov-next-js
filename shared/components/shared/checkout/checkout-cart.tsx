import { PizzaType, PizzaSize } from "@/shared/constants/pizza";
import { getCartItemDetails } from "@/shared/lib";
import React from "react";
import { CheckoutItem } from "../checkout-item";
import { WhiteBlock } from "../white-block";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { Skeleton } from "../../ui";
import { CheckoutItemSkeleton } from "../checkbox-item-skeleton";

interface Props {
    items: CartStateItem[];
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
    className?: string;
    loading?: boolean;
    removeCartItem: (id: number) => void;
}

export const CheckoutCart: React.FC<Props> = ({ className, items, onClickCountButton, loading, removeCartItem }) => {
    return (
          <WhiteBlock title="1. Корзина" className={className}>
            <div className="flex flex-col gap-5">
             
              {loading ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />) : items.map((item) => (
                
              
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  name={item.name}
                  disabled={item.disabled}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>
    )
}