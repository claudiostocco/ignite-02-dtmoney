import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction {
    id: number
    title: string
    type: string
    category: string
    amount: number
    createdAt: string
}

export function TransactionsTable() {
    const [transactions,setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        // fetch('http://localhost:3000/api/transactions/')
        //     .then(response => response.json())
        //     .then(data => console.log(data))


        //console.log(response.data)
        api.get('transactions').then(response => setTransactions(response.data.transactions))

        // api.get('versao').then(response => console.log('versa: ',response.data))
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(data => (
                        <tr key={data.id}>
                            <td>{data.title}</td>
                            <td className={data.type}>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(data.amount)  }</td>
                            <td>{data.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(data.createdAt))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}