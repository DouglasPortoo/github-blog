import Logo from "../../assets/Logo.svg"
import { Container } from "./styles"

export function Header (){
  return(
    <Container>
    <img src={Logo} alt="" />
    </Container>
  )
}