/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewsRating } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewsRatingUpdateFormInputValues = {
    review?: string;
    stars?: number;
    userId?: string;
};
export declare type ReviewsRatingUpdateFormValidationValues = {
    review?: ValidationFunction<string>;
    stars?: ValidationFunction<number>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewsRatingUpdateFormOverridesProps = {
    ReviewsRatingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    review?: PrimitiveOverrideProps<TextFieldProps>;
    stars?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewsRatingUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewsRatingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reviewsRating?: ReviewsRating;
    onSubmit?: (fields: ReviewsRatingUpdateFormInputValues) => ReviewsRatingUpdateFormInputValues;
    onSuccess?: (fields: ReviewsRatingUpdateFormInputValues) => void;
    onError?: (fields: ReviewsRatingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewsRatingUpdateFormInputValues) => ReviewsRatingUpdateFormInputValues;
    onValidate?: ReviewsRatingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewsRatingUpdateForm(props: ReviewsRatingUpdateFormProps): React.ReactElement;
