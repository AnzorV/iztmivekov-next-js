import React from 'react';
import { WhiteBlock } from '../white-block';
import { Input } from '../../ui';
import { FormInput } from '../form';

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
    return (
          <WhiteBlock title="2. Персональные данные">
                    <div className="grid grid-cols-2 gap-5">
                      <Input name="firstName" placeholder="Имя" className="text-base" />
                      <Input
                        name="lastName"
                        placeholder="Фамилия"
                        className="text-base"
                      />
                      <Input name="email" placeholder="E-Mail" className="text-base" />
                      <FormInput name="phone" placeholder="Телефон" className="text-base" />
                    </div>
                  </WhiteBlock>
    )
}