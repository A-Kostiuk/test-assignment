import React, { useState } from 'react';
import { VisuallyHiddenInput } from '../../styled';
import {
  Error,
  UploadLabel,
  UploadSpanLeft,
  UploadSpanRight,
  UploadWrapper
} from './styles';

const MAX_PATH_LENGTH = 23;

const slicePath = (path, size) =>
  path.length > MAX_PATH_LENGTH ? `...${path.slice(size)}` : path;

const UploadInput = React.forwardRef(
  ({ name, onChange, onBlur, error, ...props }, ref) => {
    const [pathUpload, setPathUpload] = useState(null);

    return (
      <UploadWrapper>
        <div>
          <VisuallyHiddenInput
            id={name}
            name={name}
            type="file"
            onBlur={onBlur}
            onChange={(evt) => {
              setPathUpload(evt.target.value);
              onChange(evt);
            }}
            ref={ref}
            {...props}
          />
          <UploadLabel htmlFor={name}>
            <UploadSpanLeft $isError={error}>Upload</UploadSpanLeft>
            <UploadSpanRight $isError={error}>
              {pathUpload
                ? slicePath(pathUpload, -MAX_PATH_LENGTH)
                : 'Upload your photo'}
            </UploadSpanRight>
          </UploadLabel>
        </div>
        <Error>{error}</Error>
      </UploadWrapper>
    );
  },
);

UploadInput.displayName = 'UploadInput';

export default UploadInput;
