/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartCreateFormInputValues = {
    productId?: string;
    productQty?: number;
    productPrice?: number;
    cartTotal?: number;
    cartStatus?: boolean;
};
export declare type CartCreateFormValidationValues = {
    productId?: ValidationFunction<string>;
    productQty?: ValidationFunction<number>;
    productPrice?: ValidationFunction<number>;
    cartTotal?: ValidationFunction<number>;
    cartStatus?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartCreateFormOverridesProps = {
    CartCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productId?: PrimitiveOverrideProps<TextFieldProps>;
    productQty?: PrimitiveOverrideProps<TextFieldProps>;
    productPrice?: PrimitiveOverrideProps<TextFieldProps>;
    cartTotal?: PrimitiveOverrideProps<TextFieldProps>;
    cartStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CartCreateFormProps = React.PropsWithChildren<{
    overrides?: CartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onSuccess?: (fields: CartCreateFormInputValues) => void;
    onError?: (fields: CartCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onValidate?: CartCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartCreateForm(props: CartCreateFormProps): React.ReactElement;
