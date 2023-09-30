import { StaticImageData } from "next/image";

export interface Project {
  code?:       string;
  demo?:       string;
  description: string;
  image?:      string | StaticImageData;
  stack:       string[];
  title:       string;
}

export interface ProjectModalState {
  isVisible: boolean;
  project:   Project | null;
}

export interface ProjectModalContext {
  isVisible: boolean;
  project:   Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}
