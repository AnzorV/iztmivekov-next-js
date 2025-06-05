import { Container, Title, WhiteBlock } from "@/shared/components/shared";
import { Input } from "@/shared/components/ui";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Офомление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex flex-col gap-10 flex=1 mb-20">

      <WhiteBlock title="1. Корзина">1223344443</WhiteBlock>

      <WhiteBlock title="2. Персональные данные">
        <div className="grid grid-cols-2 gap-5">
          <Input name="firstName" placeholder="Имя" className="text-base" />
          <Input name="lastName" placeholder="Фамилия" className="text-base" />
          <Input name="email" placeholder="E-Mail" className="text-base" />
          <Input name="phone" placeholder="Телефон" className="text-base" />
        </div>
      </WhiteBlock>
      </div>
    </Container>
  );
}
