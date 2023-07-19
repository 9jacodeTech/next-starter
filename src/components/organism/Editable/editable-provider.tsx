import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useContext } from 'react';

type EditableProviderProps = {
  children: ReactNode;
};
const EditableContext = createContext(false);

export const EditableProvider = (props: EditableProviderProps) => {
  const { children } = props;
  const router = useRouter();
  const showWidgets = router.pathname.startsWith('/admin');

  return (
    <EditableContext.Provider value={showWidgets}>
      {children}
    </EditableContext.Provider>
  );
};

export const useEditable = () => {
  return useContext(EditableContext);
};
