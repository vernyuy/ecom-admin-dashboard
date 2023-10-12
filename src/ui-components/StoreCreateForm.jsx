/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Store } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function StoreCreateForm(props) {
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
    name: "",
    logoUrl: "",
    fontType: "",
    hero: [],
    description: "",
    ownerEmail: "",
    ownerAddress: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [logoUrl, setLogoUrl] = React.useState(initialValues.logoUrl);
  const [fontType, setFontType] = React.useState(initialValues.fontType);
  const [hero, setHero] = React.useState(initialValues.hero);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [ownerEmail, setOwnerEmail] = React.useState(initialValues.ownerEmail);
  const [ownerAddress, setOwnerAddress] = React.useState(
    initialValues.ownerAddress
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setLogoUrl(initialValues.logoUrl);
    setFontType(initialValues.fontType);
    setHero(initialValues.hero);
    setCurrentHeroValue("");
    setDescription(initialValues.description);
    setOwnerEmail(initialValues.ownerEmail);
    setOwnerAddress(initialValues.ownerAddress);
    setErrors({});
  };
  const [currentHeroValue, setCurrentHeroValue] = React.useState("");
  const heroRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    logoUrl: [{ type: "Required" }],
    fontType: [],
    hero: [{ type: "Required" }],
    description: [],
    ownerEmail: [{ type: "Email" }],
    ownerAddress: [{ type: "JSON" }],
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
          name,
          logoUrl,
          fontType,
          hero,
          description,
          ownerEmail,
          ownerAddress,
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
          await DataStore.save(new Store(modelFields));
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
      {...getOverrideProps(overrides, "StoreCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              logoUrl,
              fontType,
              hero,
              description,
              ownerEmail,
              ownerAddress,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Logo url"
        isRequired={true}
        isReadOnly={false}
        value={logoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              logoUrl: value,
              fontType,
              hero,
              description,
              ownerEmail,
              ownerAddress,
            };
            const result = onChange(modelFields);
            value = result?.logoUrl ?? value;
          }
          if (errors.logoUrl?.hasError) {
            runValidationTasks("logoUrl", value);
          }
          setLogoUrl(value);
        }}
        onBlur={() => runValidationTasks("logoUrl", logoUrl)}
        errorMessage={errors.logoUrl?.errorMessage}
        hasError={errors.logoUrl?.hasError}
        {...getOverrideProps(overrides, "logoUrl")}
      ></TextField>
      <TextField
        label="Font type"
        isRequired={false}
        isReadOnly={false}
        value={fontType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              logoUrl,
              fontType: value,
              hero,
              description,
              ownerEmail,
              ownerAddress,
            };
            const result = onChange(modelFields);
            value = result?.fontType ?? value;
          }
          if (errors.fontType?.hasError) {
            runValidationTasks("fontType", value);
          }
          setFontType(value);
        }}
        onBlur={() => runValidationTasks("fontType", fontType)}
        errorMessage={errors.fontType?.errorMessage}
        hasError={errors.fontType?.hasError}
        {...getOverrideProps(overrides, "fontType")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              logoUrl,
              fontType,
              hero: values,
              description,
              ownerEmail,
              ownerAddress,
            };
            const result = onChange(modelFields);
            values = result?.hero ?? values;
          }
          setHero(values);
          setCurrentHeroValue("");
        }}
        currentFieldValue={currentHeroValue}
        label={"Hero"}
        items={hero}
        hasError={errors?.hero?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("hero", currentHeroValue)
        }
        errorMessage={errors?.hero?.errorMessage}
        setFieldValue={setCurrentHeroValue}
        inputFieldRef={heroRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Hero"
          isRequired={true}
          isReadOnly={false}
          value={currentHeroValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.hero?.hasError) {
              runValidationTasks("hero", value);
            }
            setCurrentHeroValue(value);
          }}
          onBlur={() => runValidationTasks("hero", currentHeroValue)}
          errorMessage={errors.hero?.errorMessage}
          hasError={errors.hero?.hasError}
          ref={heroRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "hero")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              logoUrl,
              fontType,
              hero,
              description: value,
              ownerEmail,
              ownerAddress,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Owner email"
        isRequired={false}
        isReadOnly={false}
        value={ownerEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              logoUrl,
              fontType,
              hero,
              description,
              ownerEmail: value,
              ownerAddress,
            };
            const result = onChange(modelFields);
            value = result?.ownerEmail ?? value;
          }
          if (errors.ownerEmail?.hasError) {
            runValidationTasks("ownerEmail", value);
          }
          setOwnerEmail(value);
        }}
        onBlur={() => runValidationTasks("ownerEmail", ownerEmail)}
        errorMessage={errors.ownerEmail?.errorMessage}
        hasError={errors.ownerEmail?.hasError}
        {...getOverrideProps(overrides, "ownerEmail")}
      ></TextField>
      <TextAreaField
        label="Owner address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              logoUrl,
              fontType,
              hero,
              description,
              ownerEmail,
              ownerAddress: value,
            };
            const result = onChange(modelFields);
            value = result?.ownerAddress ?? value;
          }
          if (errors.ownerAddress?.hasError) {
            runValidationTasks("ownerAddress", value);
          }
          setOwnerAddress(value);
        }}
        onBlur={() => runValidationTasks("ownerAddress", ownerAddress)}
        errorMessage={errors.ownerAddress?.errorMessage}
        hasError={errors.ownerAddress?.hasError}
        {...getOverrideProps(overrides, "ownerAddress")}
      ></TextAreaField>
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
