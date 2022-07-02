import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';


import { Container, TransactionTypeContainer, RadioBox } from './style';
import { useState } from 'react';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose } : NewTransactionsModalProps ) {

  const [type, setType] = useState('deposit');  

  return (
      <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder='Titulo'
        />
        
        <input 
          type='number'
          placeholder='Valor'
        />

        <input 
          placeholder='Categoria'
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === "deposit"}
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            isActive={type === "withdraw"}
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type="submit">
          Cadastrar
        </button>
        
      </Container>
    </Modal>
  )
}