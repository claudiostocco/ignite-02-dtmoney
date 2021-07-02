import { Container, Content } from "./style";
import logoimage from "../../assets/logo.svg"

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoimage} alt="DT Money"/>
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}