import { Container } from "./style";

export function TransactionsTable() {
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