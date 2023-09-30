import { Project, ProjectModalState } from '@/models';

type Actions =
  | {
      type: 'open modal';
      payload: Project;
    }
  | {
      type: 'close modal';
    };

export const modalReducer = (
  state: ProjectModalState,
  action: Actions
): ProjectModalState => {
  switch (action.type) {
    case 'open modal':
      return {
        isVisible: true,
        project: action.payload,
      };
    case 'close modal':
      return {
        isVisible: false,
        project: null,
      };

    default:
      return state;
  }
};
