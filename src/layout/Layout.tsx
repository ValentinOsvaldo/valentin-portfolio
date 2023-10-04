import { ProjectModalProvider } from "@/context/project-modal/ProjectModalProvider"
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <ProjectModalProvider>
      { children }
      <Analytics />
    </ProjectModalProvider>
  )
}
