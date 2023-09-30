import { ProjectModalContext as ProjectModalState } from '@/models';
import { createContext } from 'react';

const initialState: ProjectModalState = {
  isVisible: false,
  project: null,
  openModal: () => {},
  closeModal: () => {},
};

export const ProjectModalContext =
  createContext<ProjectModalState>(initialState);
