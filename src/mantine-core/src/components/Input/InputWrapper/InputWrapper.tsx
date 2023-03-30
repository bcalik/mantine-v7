import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  MantineSize,
} from '../../../core';
import { InputLabel, InputLabelStylesNames } from '../InputLabel/InputLabel';
import {
  InputDescription,
  InputDescriptionStylesNames,
} from '../InputDescription/InputDescription';
import { InputError, InputErrorStylesNames } from '../InputError/InputError';
import { InputWrapperProvider } from '../InputWrapper.context';
import classes from './InputWrapper.module.css';
import { getInputOffsets } from './get-input-offsets/get-input-offsets';

export type InputWrapperStylesNames =
  | 'root'
  | InputLabelStylesNames
  | InputDescriptionStylesNames
  | InputErrorStylesNames;

export interface __InputWrapperProps {
  /** Contents of `Input.Label` component, if not set, label is not rendered. */
  label?: React.ReactNode;

  /** Contents of `Input.Description` component, if not set, description is not rendered. */
  description?: React.ReactNode;

  /** Contents of `Input.Error` component, if not set, error is not rendered. */
  error?: React.ReactNode;

  /** Adds required attribute to the input and a red asterisk on the right side of label, `false` by default */
  required?: boolean;

  /** Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input, `false` by default */
  withAsterisk?: boolean;

  /** Props spread to the `Input.Label` component */
  labelProps?: Record<string, any>;

  /** Props spread to the `Input.Description` component */
  descriptionProps?: Record<string, any>;

  /** Props spread to the `InputError` component */
  errorProps?: Record<string, any>;

  /** Input container component, defaults to `React.Fragment` */
  inputContainer?(children: React.ReactNode): React.ReactNode;

  /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
  inputWrapperOrder?: ('label' | 'input' | 'description' | 'error')[];
}

export interface InputWrapperProps
  extends __InputWrapperProps,
    BoxProps,
    StylesApiProps<InputWrapperStylesNames>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Static id used as base to generate `aria-` attributes, by default generates random id */
  id?: string;

  /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
  size?: MantineSize | (string & {});

  /** `Input.Label` root element, `'label'` by default */
  labelElement?: 'label' | 'div';
}

export interface InputWrapperFactory {
  props: InputWrapperProps;
  ref: HTMLDivElement;
  stylesNames: InputWrapperStylesNames;
}

const defaultProps: Partial<InputWrapperProps> = {
  labelElement: 'label',
  size: 'sm',
  inputContainer: (children) => children,
  inputWrapperOrder: ['label', 'description', 'input', 'error'],
};

export const InputWrapper = factory<InputWrapperFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    ...others
  } = useProps('InputWrapper', defaultProps, props);

  const getStyles = useStyles({
    name: ['InputWrapper', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const sharedProps = {
    classNames,
    styles,
    unstyled,
    size,
    variant,
    __staticSelector,
  };

  const isRequired = typeof withAsterisk === 'boolean' ? withAsterisk : required;
  const errorId = id ? `${id}-error` : errorProps?.id;
  const descriptionId = id ? `${id}-description` : descriptionProps?.id;
  const hasError = !!error && typeof error !== 'boolean';
  const hasDescription = !!description;

  const _label = label && (
    <InputLabel
      key="label"
      labelElement={labelElement}
      id={id ? `${id}-label` : undefined}
      htmlFor={id}
      required={isRequired}
      {...sharedProps}
      {...labelProps}
    >
      {label}
    </InputLabel>
  );

  const _description = hasDescription && (
    <InputDescription
      key="description"
      {...descriptionProps}
      {...sharedProps}
      size={descriptionProps?.size || sharedProps.size}
      id={descriptionProps?.id || descriptionId}
    >
      {description}
    </InputDescription>
  );

  const _input = <React.Fragment key="input">{inputContainer!(children)}</React.Fragment>;

  const _error = hasError && (
    <InputError
      {...errorProps}
      {...sharedProps}
      size={errorProps?.size || sharedProps.size}
      key="error"
      id={errorProps?.id || errorId}
    >
      {error}
    </InputError>
  );

  const content = inputWrapperOrder!.map((part) => {
    switch (part) {
      case 'label':
        return _label;
      case 'input':
        return _input;
      case 'description':
        return _description;
      case 'error':
        return _error;
      default:
        return null;
    }
  });

  return (
    <InputWrapperProvider
      value={{
        descriptionId: hasDescription ? descriptionId : undefined,
        errorId: hasError ? errorId : undefined,
        ...getInputOffsets(inputWrapperOrder!, { hasDescription, hasError }),
      }}
    >
      <Box ref={ref} variant={variant} {...getStyles('root')} {...others}>
        {content}
      </Box>
    </InputWrapperProvider>
  );
});

InputWrapper.displayName = '@mantine/core/InputWrapper';