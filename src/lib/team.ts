import avatar1 from "@/assets/team/member-1.svg";
import avatar1_2 from "@/assets/team/member-1-2.svg";
import avatar2 from "@/assets/team/member-2.svg";
import avatar2_2 from "@/assets/team/member-2-2.svg";
import avatar3 from "@/assets/team/member-3.svg";
import avatar3_2 from "@/assets/team/member-3-2.svg";
import avatar4 from "@/assets/team/member-4.svg";
import avatar4_2 from "@/assets/team/member-4-2.svg";
import avatar5 from "@/assets/team/member-5.svg";
import avatar5_2 from "@/assets/team/member-5-2.svg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  avatar2: string;
  // future fields (e.g. extended description) can be added here
}

// exported list used by TeamSection and the individual member pages
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tamara",
    role: "Directora i acompanyant referent",
    bio: "Arquitecta per formació, pastora de silencis per vocació. Dissenyà cada racó amb la respiració dels muntanyes en ment.",
    avatar: avatar1,
    avatar2: avatar1_2,
  },
  {
    id: 2,
    name: "Noel Cresencio González",
    role: "Acompanyant referent",
    bio: "Mestre ebenista amb 30 anys d'experiència. Les seves mans saben contar les històries de la fusta.",
    avatar: avatar2,
    avatar2: avatar2_2,
  },
  {
    id: 3,
    name: "José",
    role: "Tallerista de fustería i tecnologia",
    bio: "Els seus plats són poesia en forma de menjar. Utilitza només el que la terra li ofereix cada estació.",
    avatar: avatar3,
    avatar2: avatar3_2,
  },
  {
    id: 4,
    name: "Amanda",
    role: "Tallerista de costura i arts",
    bio: "Guía de muntanya certificat. Coneix cada sender com si fos el seu propi cor.",
    avatar: avatar4,
    avatar2: avatar4_2,
  },
  {
    id: 5,
    name: "Sarai",
    role: "Tallerista d'arts",
    bio: "Escriptora i historiadora. Recull les històries de les pedres, els arbres i les persones que visiten.",
    avatar: avatar5,
    avatar2: avatar5_2,
  },
];
