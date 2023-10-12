/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cart } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartUpdateFormInputValues = {
    productId?: string;
    productQty?: number;
    productPrice?: number;
    cartTotal?: number;
    cartStatus?: boolean;
};
export declare type CartUpdateFormValidationValues = {
    productId?: ValidationFunction<string>;
    productQty?: ValidationFunction<number>;
    productPrice?: ValidationFunction<number>;
    cartTotal?: ValidationFunction<number>;
    cartStatus?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartUpdateFormOverridesProps = {
    CartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productId?: PrimitiveOverrideProps<TextFieldProps>;
    productQty?: PrimitiveOverrideProps<TextFieldProps>;
    productPrice?: PrimitiveOverrideProps<TextFieldProps>;
    cartTotal?: PrimitiveOverrideProps<TextFieldProps>;
    cartStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CartUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cart?: Cart;
    onSubmit?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onSuccess?: (fields: CartUpdateFormInputValues) => void;
    onError?: (fields: CartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onValidate?: CartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartUpdateForm(props: CartUpdateFormProps): React.ReactElement;
