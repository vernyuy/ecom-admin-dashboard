/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoreCreateFormInputValues = {
    name?: string;
    logoUrl?: string;
    fontType?: string;
    hero?: string[];
    description?: string;
    ownerEmail?: string;
    ownerAddress?: string;
};
export declare type StoreCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    fontType?: ValidationFunction<string>;
    hero?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    ownerEmail?: ValidationFunction<string>;
    ownerAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreCreateFormOverridesProps = {
    StoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    fontType?: PrimitiveOverrideProps<TextFieldProps>;
    hero?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    ownerEmail?: PrimitiveOverrideProps<TextFieldProps>;
    ownerAddress?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type StoreCreateFormProps = React.PropsWithChildren<{
    overrides?: StoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onSuccess?: (fields: StoreCreateFormInputValues) => void;
    onError?: (fields: StoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onValidate?: StoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function StoreCreateForm(props: StoreCreateFormProps): React.ReactElement;
