export type ModalProps = {
  isOpen: boolean; // Открыто ли окно
  onClose: () => void; // Колбэк для закрытия окна
  title?: string; // Заголовок модального окна (опционально)
  children: React.ReactNode; // Содержимое окна
};
