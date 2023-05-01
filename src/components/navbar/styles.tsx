import styled from "styled-components"
import Button from '../helper/button';

export const LogoAndSearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.img`
    margin-right: 30px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    `

export const ButtonNew = styled(Button)`
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    width: 250px;
    height: 55px;
`

export const btn = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
