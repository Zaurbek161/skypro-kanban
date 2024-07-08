import  styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*:before,
*:after {
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}
h3 {
  margin: 0;
}
p {
  margin: 0;
}

ul li {
  list-style: none;
}


html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  margin: 0;
}`

export const Wrapper = styled.div`
max-width: 100%;
width: 100vw;
min-height: 100vh;
overflow: hidden;
background-color: #F1F1F1;`


export const Container = styled.div`
max-width: 1260px;
width: 100%;
margin: 0 auto;
padding: 0 30px;`



export const Orange = css`
  background-color: ${({theme}) => theme.orangeBg};
  color: ${({theme}) => theme.orangeText};;
`
export const Green = css`
  background-color: ${({theme}) => theme.greenBg};
  color: ${({theme}) => theme.greenText};
`
export const Purple = css`
  background-color: #E9D4FF;
  color: #9A48F1;
`
export const Gray = css`
  background: #94A6BE;
  color: #FFFFFF;
`
export const themeColor = ($color) => css`
  ${$color === "Web Designe" && Orange}
  ${$color === "Copywriting" && Purple}
  ${$color === "Research" && Green}
  ${!$color === "" && Gray}
`


export const Hover01 = css`
  &:hover {
  background-color: #33399b;
  }
  `

  export const Hover02 = css`
  &:hover{
    color: #33399b;
    
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
  `


