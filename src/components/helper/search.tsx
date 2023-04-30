import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  width: 300px;
  height: 55px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
`;

const SearchIcon = styled.span`
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
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
  return (
    <SearchBarContainer>
      <SearchIcon className="material-icons">search</SearchIcon>
      <SearchInput type="text" placeholder={placeholder} onChange={onChange} />
    </SearchBarContainer>
  );
};

export default SearchBar;
