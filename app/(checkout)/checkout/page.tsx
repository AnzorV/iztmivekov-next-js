import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Офомление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
         <div className="flex flex-col gap-5">
             <CheckoutItem id={1} imageUrl={'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'} details="Большая Конфета Россия Классическая с присыпкой в шоколаде, 200 г" name="Чоризо Фреш" price={216} quantity={3} />
                    <CheckoutItem id={1} imageUrl={'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'} details="Большая Конфета Россия Классическая с присыпкой в шоколаде, 200 г" name="Чоризо Фреш" price={216} quantity={3} />

         </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" placeholder="Имя" className="text-base" />
              <Input
                name="lastName"
                placeholder="Фамилия"
                className="text-base"
              />
              <Input name="email" placeholder="E-Mail" className="text-base" />
              <Input name="phone" placeholder="Телефон" className="text-base" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес Доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Введите адресс..."
              />
              <Textarea
                className="text-base"
                placeholder="Комментарий к заказу"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого</span>
              <span className="text-[34px] font-extrabold">3506 ₽</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Стоимость товаров:
                </div>
              }
              value="3000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  Налоги:
                </div>
              }
              value="3000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  Доставка:
                </div>
              }
              value="3000 ₽"
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
