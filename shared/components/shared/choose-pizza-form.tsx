import { cn } from "@/shared/lib/utils";
import React from "react";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { Ingredient } from "@prisma/client";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: Ingredient[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  ingredients,
  items,
  onClickAdd,
  imageUrl,
  name,
  className,
}) => {
    const textDetaills = '30 см, традиционное тесто 30';
    const totalPrice = 350;
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);
  return (
    <div className={cn(className, "flex flex-1")}>
        <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="lg" className="font-extrabold mb-5" />

        <p className="text-gray-400">{textDetaills}</p>

       <div className="flex flex-col gap-4 mt-5">
       <GroupVariants items={pizzaSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />
       <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />
       </div>

       <div className="grid grid-cols-3 gap-3">
        
       </div>

        <Button

            className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                Добавить в корзину {totalPrice} ₽
            </Button>
      </div>
    </div>
  );
};
