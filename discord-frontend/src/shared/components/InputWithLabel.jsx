import { styled } from '@mui/material';
import React from 'react';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
});

const Input = styled('input')({
  flexGrow: 1,
  height: 40,
  border: '1px solid black',
  borderRadius: '5px',
  color: '#deddde',
  background: '#35393f',
  margin: 0,
  fontSize: '16px',
  padding: '0 5px',
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleValueChange}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
