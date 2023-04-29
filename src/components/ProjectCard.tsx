import { ReactElement } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  miniLogo: ReactElement<SVGSVGElement>;
  projectUrl: string;
}

export default function ProjectCard(Project: ProjectCardProps) {}
