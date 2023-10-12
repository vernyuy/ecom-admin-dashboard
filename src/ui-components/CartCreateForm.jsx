/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Cart } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CartCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    productId: "",
    productQty: "",
    productPrice: "",
    cartTotal: "",
    cartStatus: false,
  };
  const [productId, setProductId] = React.useState(initialValues.productId);
  const [productQty, setProductQty] = React.useState(initialValues.productQty);
  const [productPrice, setProductPrice] = React.useState(
    initialValues.productPrice
  );
  const [cartTotal, setCartTotal] = React.useState(initialValues.cartTotal);
  const [cartStatus, setCartStatus] = React.useState(initialValues.cartStatus);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProductId(initialValues.productId);
    setProductQty(initialValues.productQty);
    setProductPrice(initialValues.productPrice);
    setCartTotal(initialValues.cartTotal);
    setCartStatus(initialValues.cartStatus);
    setErrors({});
  };
  const validations = {
    productId: [{ type: "Required" }],
    productQty: [{ type: "Required" }],
    productPrice: [{ type: "Required" }],
    cartTotal: [{ type: "Required" }],
    cartStatus: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          productId,
          productQty,
          productPrice,
          cartTotal,
          cartStatus,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Cart(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CartCreateForm")}
      {...rest}
    >
      <TextField
        label="Product id"
        isRequired={true}
        isReadOnly={false}
        value={productId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId: value,
              productQty,
              productPrice,
              cartTotal,
              cartStatus,
            };
            const result = onChange(modelFields);
            value = result?.productId ?? value;
          }
          if (errors.productId?.hasError) {
            runValidationTasks("productId", value);
          }
          setProductId(value);
        }}
        onBlur={() => runValidationTasks("productId", productId)}
        errorMessage={errors.productId?.errorMessage}
        hasError={errors.productId?.hasError}
        {...getOverrideProps(overrides, "productId")}
      ></TextField>
      <TextField
        label="Product qty"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={productQty}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              productId,
              productQty: value,
              productPrice,
              cartTotal,
              cartStatus,
            };
            const result = onChange(modelFields);
            value = result?.productQty ?? value;
          }
          if (errors.productQty?.hasError) {
            runValidationTasks("productQty", value);
          }
          setProductQty(value);
        }}
        onBlur={() => runValidationTasks("productQty", productQty)}
        errorMessage={errors.productQty?.errorMessage}
        hasError={errors.productQty?.hasError}
        {...getOverrideProps(overrides, "productQty")}
      ></TextField>
      <TextField
        label="Product price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={productPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              productId,
              productQty,
              productPrice: value,
              cartTotal,
              cartStatus,
            };
            const result = onChange(modelFields);
            value = result?.productPrice ?? value;
          }
          if (errors.productPrice?.hasError) {
            runValidationTasks("productPrice", value);
          }
          setProductPrice(value);
        }}
        onBlur={() => runValidationTasks("productPrice", productPrice)}
        errorMessage={errors.productPrice?.errorMessage}
        hasError={errors.productPrice?.hasError}
        {...getOverrideProps(overrides, "productPrice")}
      ></TextField>
      <TextField
        label="Cart total"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cartTotal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              productId,
              productQty,
              productPrice,
              cartTotal: value,
              cartStatus,
            };
            const result = onChange(modelFields);
            value = result?.cartTotal ?? value;
          }
          if (errors.cartTotal?.hasError) {
            runValidationTasks("cartTotal", value);
          }
          setCartTotal(value);
        }}
        onBlur={() => runValidationTasks("cartTotal", cartTotal)}
        errorMessage={errors.cartTotal?.errorMessage}
        hasError={errors.cartTotal?.hasError}
        {...getOverrideProps(overrides, "cartTotal")}
      ></TextField>
      <SwitchField
        label="Cart status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cartStatus}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              productId,
              productQty,
              productPrice,
              cartTotal,
              cartStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.cartStatus ?? value;
          }
          if (errors.cartStatus?.hasError) {
            runValidationTasks("cartStatus", value);
          }
          setCartStatus(value);
        }}
        onBlur={() => runValidationTasks("cartStatus", cartStatus)}
        errorMessage={errors.cartStatus?.errorMessage}
        hasError={errors.cartStatus?.hasError}
        {...getOverrideProps(overrides, "cartStatus")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
