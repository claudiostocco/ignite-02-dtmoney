import { FormEvent, useState } from "react";
import { Container, RadioButton, TransactionTypeContainer } from "./styles";
import Modal from 'react-modal'
import imgClose from '../../assets/close.svg'
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import { api } from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps) {
    const [ type, setType ] = useState('deposit')
    const [title,setTitle] = useState('')
    const [value,setValue] = useState(0)
    const [category,setCategory] = useState('')

    function handleCreateNewTRansaction(event: FormEvent) {
        event.preventDefault()
        const data = {title,value,type,category}
        api.post('/transactions',data)
            .then(response => {if (response.status === 201) onRequestClose()})
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="react-modal-content" overlayClassName="react-modal-overlay">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={imgClose} alt="Fechar" />
            </button>
            <Container onSubmit={handleCreateNewTRansaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
                <TransactionTypeContainer>
                    <RadioButton type="button" isActive={type === 'deposit'} onClick={() => setType('deposit')} activeColor={'green'}>
                        <img src={imgIncome} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioButton>
                    <RadioButton type="button" isActive={type === 'withdraw'} onClick={() => setType('withdraw')} activeColor={'red'}>
                        <img src={imgOutcome} alt="Saida" />
                        <span>Saida</span>
                    </RadioButton>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}