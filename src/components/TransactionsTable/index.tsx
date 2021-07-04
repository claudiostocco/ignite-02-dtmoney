import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
    // useEffect(() => {
    //     api.get('transactions')
    //         .then(response => console.log(response.data))
    // },[])

    useEffect(() => {
        // fetch('http://localhost:3000/api/transactions/')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        api.get('transactions').then(response => console.log(response.data))

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
                    <tr>
                        <td>Teste</td>
                        <td className="deposit">1500,00</td>
                        <td>Dev</td>
                        <td>01/07/2021</td>
                    </tr>
                    <tr>
                        <td>Teste</td>
                        <td className="withdraw">1500,00</td>
                        <td>Dev</td>
                        <td>01/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}