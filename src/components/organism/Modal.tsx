import React, { ReactNode, useEffect } from 'react';
import { CloseIcon } from 'components/atom/close-icon';
import clsx from 'clsx';
type ModalProps = {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  visible: boolean;
};

const Modal = (props: ModalProps) => {
  const { title, children, onClose, visible = false } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [visible]);

  const classNames = clsx(
    'fixed  top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center bg-[#00000031]',
    visible ? 'flex' : 'hidden'
  );

  return (
    <>
      <div
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        className={classNames}
      >
        <div className="relative w-full h-full  max-w-xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={onClose}
            >
              <CloseIcon />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8 ">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
              <div className="py-2 bg-white max-h-[80vh] overflow-y-auto">
                {visible && children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
