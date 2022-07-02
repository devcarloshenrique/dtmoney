import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';


import { Container, TransactionTypeContainer } from './style';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose } : NewTransactionsModalProps ) {
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
            <button 
              type="button"
            >
              <img src={incomeImg} alt="Entradas" />
              <span>Entrada</span>
            </button>

            <button 
              type="button"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>

          <button type="submit">
            Cadastrar
          </button>
          
        </Container>
      </Modal>
    )
}