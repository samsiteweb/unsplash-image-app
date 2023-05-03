import styled from 'styled-components';

export const ModalTitle = styled.div`
font-weight: 500;
font-size: 24px;
line-height: 33px;
color: #333333;
`
export const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
& > :first-child {
    margin-right: 10px;
  }
`

export const ModalMessage = styled.div<{isError: boolean |undefined}>`
color: ${({isError}) => isError ? 'red': 'green'};
font-size: 12px;
padding: 5px;
align-items: center;
`