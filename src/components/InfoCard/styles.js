import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap:32px;

margin-top: -150px;

border-radius: 10px;
background-color: ${({ theme }) => theme.COLORS.PROFILE};
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

position: relative;
width: 864px;

padding: 32px 0 32px 42px ;

>img{
width: 148px;
height: 148px;
}
`