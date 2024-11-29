const useDeleteConfirmationModal = (
  onCancel: () => void,
  onDelete: () => void
) => {
  const cancelButton = () => {
    onCancel();
  };

  const deleteButton = () => {
    onDelete();
  };

  return { cancelButton, deleteButton };
};

export default useDeleteConfirmationModal;
