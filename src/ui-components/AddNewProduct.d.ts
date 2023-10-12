/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps, ToggleButtonProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddNewProductInputValues = {
    name?: string;
    Field0?: string;
    Field1?: boolean;
};
export declare type AddNewProductValidationValues = {
    name?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddNewProductOverridesProps = {
    AddNewProductGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field1?: PrimitiveOverrideProps<ToggleButtonProps>;
} & EscapeHatchProps;
export declare type AddNewProductProps = React.PropsWithChildren<{
    overrides?: AddNewProductOverridesProps | undefined | null;
} & {
    onSubmit: (fields: AddNewProductInputValues) => void;
    onChange?: (fields: AddNewProductInputValues) => AddNewProductInputValues;
    onValidate?: AddNewProductValidationValues;
} & React.CSSProperties>;
export default function AddNewProduct(props: AddNewProductProps): React.ReactElement;
