import { ProjectModalProvider } from "@/context/project-modal/ProjectModalProvider"
import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <ProjectModalProvider>
      { children }
    </ProjectModalProvider>
  )
}
