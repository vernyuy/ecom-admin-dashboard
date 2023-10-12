/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewsRatingCreateFormInputValues = {
    review?: string;
    stars?: number;
    userId?: string;
};
export declare type ReviewsRatingCreateFormValidationValues = {
    review?: ValidationFunction<string>;
    stars?: ValidationFunction<number>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewsRatingCreateFormOverridesProps = {
    ReviewsRatingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    review?: PrimitiveOverrideProps<TextFieldProps>;
    stars?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewsRatingCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewsRatingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewsRatingCreateFormInputValues) => ReviewsRatingCreateFormInputValues;
    onSuccess?: (fields: ReviewsRatingCreateFormInputValues) => void;
    onError?: (fields: ReviewsRatingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewsRatingCreateFormInputValues) => ReviewsRatingCreateFormInputValues;
    onValidate?: ReviewsRatingCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewsRatingCreateForm(props: ReviewsRatingCreateFormProps): React.ReactElement;
