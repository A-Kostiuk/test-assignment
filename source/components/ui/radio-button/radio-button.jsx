import React from 'react';
import styled from 'styled-components';
import { VisuallyHiddenInput } from '../../styled';

const Label = styled.label`
  display: block;
`;

const RadioButton = React.forwardRef(
  (
    {
      labelComponent, // компонент для отображения label
      selectValue, // выбранное значение
      name, // имя
      value, // значение
      onChange,
      onBlur,
      description,
      ...props
    },
    ref,
  ) => {
    const LabelComponent = labelComponent;
    const isChecked = value === selectValue;
    return (
      <Label>
        <VisuallyHiddenInput
          value={value}
          checked={isChecked}
          name={name}
          type="radio"
          onChange={onChange}
          onBlur={onBlur}
          {...props}
          ref={ref}
        />
        <LabelComponent $isChecked={isChecked}>{description}</LabelComponent>
      </Label>
    );
  },
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
