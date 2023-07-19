import React, { ReactNode, useCallback, useState } from 'react';
import Button from 'components/atom/button';
import { useEditable } from './editable-provider';
import Modal from '../Modal';
import { CancelOrSubmit } from 'components/organism';

type EditableProps = {
  children: ReactNode;
  onEditBtnClick?: () => void;
  onDeleteBtnClick?: () => void;
};
export const Editable = (props: EditableProps) => {
  const { children, onEditBtnClick, onDeleteBtnClick } = props;
  const [showModal, setShowModal] = useState(false);
  const showWidgets = useEditable();

  const toggleDelete = useCallback(() => {
    setShowModal((showDeleteModal) => !showDeleteModal);
  }, []);

  const handleDelete = useCallback(() => {
    toggleDelete();
    onDeleteBtnClick?.();
  }, [onDeleteBtnClick, toggleDelete]);

  if (!showWidgets) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div>{children}</div>

      {onDeleteBtnClick && (
        <Modal
          title="Are you sure you want to delete?"
          visible={showModal}
          onClose={toggleDelete}
        >
          <CancelOrSubmit
            submitText="Delete"
            onCancel={toggleDelete}
            htmlType="button"
            onSubmit={handleDelete}
          />
        </Modal>
      )}

      <div className="absolute inset-0 h-full w-full z-[20] bg-[#00000095] flex items-center justify-center rounded hover:border-gray-300 border-transparent border-4 border-spacing-3">
        <div className="flex items-center justify-center">
          <Button type="secondary" size="lg" onClick={onEditBtnClick}>
            Edit
          </Button>
          {onDeleteBtnClick && (
            <div className="ml-2">
              <Button type="danger" size="lg" onClick={toggleDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
