import { PizzaType, PizzaSize } from "@/shared/constants/pizza";
import { getCartItemDetails } from "@/shared/lib";
import React from "react";
import { CheckoutItem } from "../checkout-item";
import { WhiteBlock } from "../white-block";
import { CartStateItem } from "@/shared/lib/get-cart-details";

interface Props {
    items: CartStateItem[];
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
    className?: string;
    removeCartItem: (id: number) => void;
}

export const CheckoutCart: React.FC<Props> = ({ className, items, onClickCountButton, removeCartItem }) => {
    return (
          <WhiteBlock title="1. Корзина" className={className}>
            <div className="flex flex-col gap-5">
              {items.map((item) => (
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