import Modal from 'react-modal';
import { Container } from './style';

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

          <button type="submit">
            Cadastrar
          </button>
          
        </Container>
      </Modal>
    )
}