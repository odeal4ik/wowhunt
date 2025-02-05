import { useState } from 'react';
import { ModalLoginIn } from '../modal-login/modal-login';
import styles from './btnLogIn.module.css';

export function BtnLogIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={handleOpenModal}>
        Log In
      </button>
      <ModalLoginIn isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}