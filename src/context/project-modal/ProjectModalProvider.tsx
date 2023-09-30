import { ReactNode, useReducer } from 'react';
import { ProjectModalContext } from './ProjectModalContext';
import { modalReducer } from './modalReducer';
import { Project, ProjectModalState } from '@/models';

interface Props {
  children: ReactNode;
}

const initialState: ProjectModalState = {
  isVisible: false,
  project: null,
};

export const ProjectModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (project: Project) => {
    dispatch({
      type: 'open modal',
      payload: project,
    });
  };

  const closeModal = () => {
    dispatch({
      type: 'close modal',
    });
  };

  return (
    <ProjectModalContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};
