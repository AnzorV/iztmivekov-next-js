
"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import 'react-dadata/dist/react-dadata.css';

interface Props {
    onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({onChange}) => {
    return (
        <AddressSuggestions
        token="994627ac8a8a7c4462503d630933c0063adfaf9b"
        onChange={(data)  => onChange?.(data?.value)}
        />
    )
}