import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Li, Section, Ul } from '../../styled';
import Button from '../../ui/Button/button';
import Input from '../../ui/input/input';
import RadioButton from '../../ui/radio-button/radio-button';
import Title from '../../ui/title/title';
import UploadInput from '../../ui/upload-input/upload-input';
import { Fieldset, Form, Legend, RadioLabel } from './styles';

const POSITIONS_URL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
const TOKEN_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
const REGISTER_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

const PhotoConditions = {
  PHOTO_TYPES: ['jpg', 'jpeg'],
  MAX_SIZE: 5242880,
  MIN_WIDTH: 70,
  MIN_HEIGHT: 70,
};

function PostRequest() {
  const [selectValue, setSelectValue] = useState(null);
  const [positions, setPositions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  // const [token, setToken] = useState(null);

  useEffect(() => {
    fetch(POSITIONS_URL)
      .then((res) => res.json())
      .then((result) => {
        setPositions(result.positions);
        setSelectValue(result.positions[0].id);
        setIsLoaded(true);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const getToken = await fetch(TOKEN_URL).then((res) => res.json());
    const token = await getToken.token;

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { Token: token },
    };
    fetch(REGISTER_URL, requestOptions).then((responce) => responce.json()).then((result) => console.log(result));
  };

  const validateUploadInput = (evt) => {
    const getDimensions = (image) => {
      const dimensions = {};
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.onload = () => {
          dimensions.width = img.width;
          dimensions.height = img.height;
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(image);
      return dimensions;
    };
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();
    const size = file.size;
    const currentDimensions = getDimensions(file);

    const checkTypes = PhotoConditions.PHOTO_TYPES.some((it) =>
      fileName.endsWith(it),
    );
    const checkSize = PhotoConditions.MAX_SIZE <= size;
    const checkDimensions =
      PhotoConditions.MIN_WIDTH <= currentDimensions.width &&
      PhotoConditions.MIN_HEIGHT <= currentDimensions.height;
    if (!checkTypes) {
      setUploadError('The photo format must be jpeg/jpg type');
      return null;
    } else if (checkSize) {
      setUploadError('The photo size must not be greater than 5 Mb');
      return null;
    } else if (checkDimensions) {
      setUploadError('Minimum size of photo 70x70px');
      return null;
    } else {
      setUploadError('');
    }
  };

  return (
    <Section>
      <Title level={1} marginBottom={50}>
        Working with POST request
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <Input
          {...register('name', {
            required: 'Field is required',
            minLength: {
              value: 2,
              message: 'Username should contain 2-60 characters',
            },
            maxLength: {
              value: 60,
              message: 'Username should contain 2-60 characters',
            },
          })}
          type="text"
          placeholder="Your name"
          marginBottom={50}
          error={errors?.name?.message}
        />
        <Input
          {...register('email', {
            required: 'Field is required',
            pattern: {
              value:
                // eslint-disable-next-line no-control-regex
                /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
              message: 'User email, must be a valid email according to RFC2822',
            },

            minLength: 2,
            maxLength: 100,
          })}
          type="email"
          placeholder="Email"
          marginBottom={50}
          error={errors?.email?.message}
        />
        <Input
          {...register('phone', {
            required: 'Field is required',
            pattern: {
              value: /^[+]{0,1}380([0-9]{9})$/,
              message:
                'User phone number. Number should start with code of Ukraine +380',
            },
          })}
          type="tel"
          placeholder="Phone"
          marginBottom={43}
          error={errors?.phone?.message}
        />
        {isLoaded && (
          <Fieldset>
            <Legend>Select your position</Legend>
            <Ul>
              {positions.map((item) => (
                <Li key={item.id}>
                  <RadioButton
                    {...register('position_id')}
                    labelComponent={RadioLabel}
                    value={item.id}
                    description={item.name}
                    selectValue={selectValue}
                    onChange={(evt) => {
                      setSelectValue(Number(evt.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </Fieldset>
        )}

        <UploadInput
          {...register('photo', { required: true })}
          accept="image/jpeg, image/jpg"
          onChange={validateUploadInput}
          error={uploadError}
        />

        <Button type="submit" color="yellow" minWidth={100}>
          Sign up
        </Button>
      </Form>
    </Section>
  );
}

export default PostRequest;
