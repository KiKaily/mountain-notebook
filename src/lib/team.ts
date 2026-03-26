import avatarTamara1 from "@/assets/team/_Tamara1.webp";
import avatarTamara2 from "@/assets/team/_Tamara2.webp";
import avatarNoel1 from "@/assets/team/_Noel1.webp";
import avatarNoel2 from "@/assets/team/_Noel2.webp";
import avatarJose1 from "@/assets/team/_Jose1.webp";
import avatarJose2 from "@/assets/team/_Jose2.webp";
import avatarAmanda1 from "@/assets/team/_Amanda1.webp";
import avatarAmanda2 from "@/assets/team/_Amanda2.webp";
import avatarSarai1 from "@/assets/team/_Sarai1.webp";
import avatarSarai2 from "@/assets/team/_Sarai2.webp";

export interface TeamMember {
  id: number;
  name: string;
  roleKey: string;
  bioKey: string;
  avatar: string;
  hoverAvatar: string;
  category: 'core' | 'helper';
}

// exported list used by TeamSection and the individual member pages
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tamara Depares",
    roleKey: "team.members.tamara.role",
    bioKey: "team.members.tamara.bio",
    avatar: avatarTamara1,
    hoverAvatar: avatarTamara2,
    category: 'core',
  },
  {
    id: 2,
    name: "Noel Cresencio Gonzalez",
    roleKey: "team.members.noel.role",
    bioKey: "team.members.noel.bio",
    avatar: avatarNoel1,
    hoverAvatar: avatarNoel2,
    category: 'core',
  },
  {
    id: 3,
    name: "José Andrés Mingorance",
    roleKey: "team.members.jose.role",
    bioKey: "team.members.jose.bio",
    avatar: avatarJose1,
    hoverAvatar: avatarJose2,
    category: 'helper',
  },
  {
    id: 4,
    name: "Amanda Brusés Pinart",
    roleKey: "team.members.amanda.role",
    bioKey: "team.members.amanda.bio",
    avatar: avatarAmanda1,
    hoverAvatar: avatarAmanda2,
    category: 'helper',
  },
  {
    id: 5,
    name: "Sarai Lorite Rodríguez",
    roleKey: "team.members.sarai.role",
    bioKey: "team.members.sarai.bio",
    avatar: avatarSarai1,
    hoverAvatar: avatarSarai2,
    category: 'helper',
  },
];
