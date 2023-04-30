import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInputWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 55px;
  margin: 0 auto;
`;

const SearchInputIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: black;
  background-color: black;
`;

const SearchInputField = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px 0 40px;
  border: none;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));

  &::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border: 2px solid #d6d6d6;
  }
}`

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <SearchInputWrapper>
      <SearchInputIcon>
      </SearchInputIcon>
      <SearchInputField
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
