import classes from './Modal.module.scss';

/**
 * @typedef {import('./types').ModalProps} ModalProps
 */

/**
 * @function Modal
 * @param {ModalProps} props
 * @returns {JSX.Element | null}
 */

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modal}>
        <button className={classes.closeButton} onClick={onClose}>
          ×
        </button>
        {title && <h2>{title}</h2>}
        <div className={classes.modalContent}>{children}</div>
      </div>
    </div>
  );
};
