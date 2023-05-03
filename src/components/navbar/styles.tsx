import styled from "styled-components"

export const LogoAndSearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const SearchBarWrapper = styled.div`
width: 100%;
   @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const Logo = styled.img`
    margin-right: 30px;
    @media only screen and (max-width: 768px) {
     margin-right: 0px;
     width: 100px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
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
