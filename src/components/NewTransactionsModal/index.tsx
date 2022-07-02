import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';


import { Container, TransactionTypeContainer, RadioBox } from './style';
import { FormEvent, useState } from 'react';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose } : NewTransactionsModalProps ) {

  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');  

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }



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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <input 
          type='number'
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === "deposit"}
            onClick={() => setType('deposit')}            
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            isActive={type === "withdraw"}
            onClick={() => setType('withdraw')}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
        
      </Container>
    </Modal>
  )
}