import { Container, Content } from "./style";
import logoimage from "../../assets/logo.svg"

interface HeaderProps {
    onOpenTableTransactionModal: () => void
}

export function Header({onOpenTableTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoimage} alt="DT Money"/>
                <button type="button" onClick={onOpenTableTransactionModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}