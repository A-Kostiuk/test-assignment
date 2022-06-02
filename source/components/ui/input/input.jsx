import React from 'react';
import { Field, Label, Error, Tel, Wrapper } from './styles';

const Input = React.forwardRef(
  (
    {
      placeholder,
      marginBottom,
      onChange,
      onBlur,
      name,
      type = 'text',
      error,
      ...props
    },
    ref,
  ) => (
    <Wrapper $marginBottom={marginBottom}>
      <Field
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        $isError={error}
        {...props}
      />
      <Label htmlFor={name} text={placeholder}>
        {placeholder}
      </Label>
      <Error>
        {error || (type === 'tel' && <Tel>+38 (XXX) XXX - XX - XX</Tel>)}
      </Error>
    </Wrapper>
  ),
);

Input.displayName = 'Input';

export default Input;
