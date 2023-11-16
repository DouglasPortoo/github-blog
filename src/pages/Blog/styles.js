import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 864px;

margin: 0 auto;
`
export const Profile = styled.div`
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

export const ProfileData = styled.div`

>h1{
  margin-bottom: 15px;
}

>p{
  margin-bottom: 38px;
}
`

export const Info = styled.div`
display:flex;
gap:24px;
`

export const SocialIcons = styled.div`
display:flex;
gap:8px;

`

export const Search = styled.div`
margin-bottom: 50px;
>input{

width: 100%;
padding: 12px 16px;

border-radius: 6px;
border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
background: ${({ theme }) => theme.COLORS.INPUT};

color:${({ theme }) => theme.COLORS.TEXT}
}
`
export const Publications= styled.div`

display: flex;
justify-content: space-between;
margin-top: 80px;
margin-bottom: 10px;
`

export const Posts= styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
gap: 32px;
`


