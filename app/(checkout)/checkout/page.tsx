import { Container, Title, WhiteBlock } from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Офомление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex=1 mb-20">
          <WhiteBlock title="1. Корзина">1223344443</WhiteBlock>

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
                <Input name="firstName" className="text-base" placeholder="Введите адресс..." />
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
                  <span className="text-4xl font-extrabold">3506 ₽</span>
                </div>
            </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
