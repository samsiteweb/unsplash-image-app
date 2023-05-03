import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string;
  icon?: string;
  label?: string;
  width?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  width: ${(props) => props.width ? props.width : '300px'};
  height: 55px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
`;

const InputIcon = styled.span`
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  margin-right: 10px;
  color: #BDBDBD;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  margin: 0;
  flex: 1;
  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #BDBDBD;
  }
`;

const InputLabelElement = styled.label`
    margin-right: 8px;
    font-family: 'Open Sans', sans-serif; 
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #4F4F4F;
    padding-bottom: 10px;
`;

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
const { label, width, icon, onChange, inputRef, ...inputProps } = props;
  return (
    <InputLabelContainer>
         {label && <InputLabelElement>{label}</InputLabelElement>}
    <InputContainer width={width}>
        {icon && <InputIcon className="material-icons">{icon}</InputIcon>}
      <TextInput {...inputProps} ref={inputRef ?? ref} onChange={onChange} />
    </InputContainer>
    </InputLabelContainer>
  );
});

export default CustomInput;
