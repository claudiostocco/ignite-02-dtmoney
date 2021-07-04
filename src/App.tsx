import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {
  const [ isNewTableTransactionModalOpen, setIsNewTableTransactionModalOpen ] = useState(false)

  function handleOpenTableTransactionModal() {
      setIsNewTableTransactionModalOpen(true)
  }

  function handleCloseTableTransactionModal() {
      setIsNewTableTransactionModalOpen(false)
  }

return (
    <>
      <Header onOpenTableTransactionModal={handleOpenTableTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTableTransactionModalOpen} onRequestClose={handleCloseTableTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}