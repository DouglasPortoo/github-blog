import styled from "styled-components";

export const Container= styled.div`

width: 416px;
padding: 32px;

border-radius: 10px;
background: ${({ theme }) => theme.COLORS.POST};

cursor: pointer;

>p{

white-space: break-spaces;
height: 150px;
overflow-y: clip;
margin-top: 20px;

}

`

export const TitleAndTimer= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

>h1{
font-size: 20px;
font-weight: 700;
line-height: 160%; 
white-space: break-spaces;
width: 500px;
}

>time{
  width: 100%;
  display: flex;
  justify-content: end;
}
`