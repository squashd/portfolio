import { HjartlandLogo as Logo } from "@/assets/logos/logos";
import {
  HjartlandMini as MiniLogo,
  MerkelappenMini,
  WordleMini,
} from "@/assets/logos/minilogos";
import {
  LightningIcon,
  EyeIcon,
  TypewriterIcon,
  ListIcon,
  LinkIcon,
  OdinRevisited,
} from "@/assets/Icons";
import {
  SunMedium,
  Laptop,
  Moon,
  X,
  Wrench,
  Info,
  FolderGit,
  Contact,
  Github,
  Coffee,
  BookOpen,
  Plus,
  Minus,
  Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: Logo,
  miniLogo: MiniLogo,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  close: X,
  tools: Wrench,
  info: Info,
  projects: FolderGit,
  contact: Contact,
  lightning: LightningIcon,
  eye: EyeIcon,
  typewriter: TypewriterIcon,
  list: ListIcon,
  link: LinkIcon,
  github: Github,
  coffee: Coffee,
  odin: OdinRevisited,
  merkelappen: MerkelappenMini,
  wordle: WordleMini,
  book: BookOpen,
  plus: Plus,
  minus: Minus,
};
