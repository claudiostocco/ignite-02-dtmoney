import { Container, TransactionTypeContainer } from "./styles";
import Modal from 'react-modal'
import imgClose from '../../assets/close.svg'
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="react-modal-content" overlayClassName="react-modal-overlay">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={imgClose} alt="Fechar" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Titulo"/>
                <input type="number" placeholder="Valor"/>
                <TransactionTypeContainer>
                    <button type="button">
                        <img src={imgIncome} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={imgOutcome} alt="Saida" />
                        <span>Saida</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}