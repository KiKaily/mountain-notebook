<<<<<<< HEAD
import avatarTamara1 from "@/assets/team/_Tamara1.webp";
import avatarTamara2 from "@/assets/team/_Tamara2.webp";
import avatarNoel1 from "@/assets/team/_Noel1.webp";
import avatarNoel2 from "@/assets/team/_Noel2.webp";
import avatarJose1 from "@/assets/team/_Amanda1.webp";
import avatarJose2 from "@/assets/team/_Amanda2.webp";
import avatarAmanda1 from "@/assets/team/_Amanda1.webp";
import avatarAmanda2 from "@/assets/team/_Amanda2.webp";
import avatarSarai1 from "@/assets/team/_Sarai1.webp";
import avatarSarai2 from "@/assets/team/_Sarai2.webp";
=======
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
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
<<<<<<< HEAD
  hoverAvatar: string;
  category: 'core' | 'helper';
=======
  avatar2: string;
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
  // future fields (e.g. extended description) can be added here
}

// exported list used by TeamSection and the individual member pages
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tamara",
    role: "Directora i acompanyant referent",
    bio: "Arquitecta per formació, pastora de silencis per vocació. Dissenyà cada racó amb la respiració dels muntanyes en ment.",
<<<<<<< HEAD
    avatar: avatarTamara1,
    hoverAvatar: avatarTamara2,
    category: 'core',
=======
    avatar: avatar1,
    avatar2: avatar1_2,
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
  },
  {
    id: 2,
    name: "Noel Cresencio González",
    role: "Acompanyant referent",
    bio: "Mestre ebenista amb 30 anys d'experiència. Les seves mans saben contar les històries de la fusta.",
<<<<<<< HEAD
    avatar: avatarNoel1,
    hoverAvatar: avatarNoel2,
    category: 'core',
=======
    avatar: avatar2,
    avatar2: avatar2_2,
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
  },
  {
    id: 3,
    name: "José",
    role: "Tallerista de fustería i tecnologia",
    bio: "Els seus plats són poesia en forma de menjar. Utilitza només el que la terra li ofereix cada estació.",
<<<<<<< HEAD
    avatar: avatarJose1,
    hoverAvatar: avatarJose2,
    category: 'helper',
=======
    avatar: avatar3,
    avatar2: avatar3_2,
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
  },
  {
    id: 4,
    name: "Amanda",
    role: "Tallerista de costura i arts",
    bio: "Guía de muntanya certificat. Coneix cada sender com si fos el seu propi cor.",
<<<<<<< HEAD
    avatar: avatarAmanda1,
    hoverAvatar: avatarAmanda2,
    category: 'helper',
=======
    avatar: avatar4,
    avatar2: avatar4_2,
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
  },
  {
    id: 5,
    name: "Sarai",
    role: "Tallerista d'arts",
    bio: "Escriptora i historiadora. Recull les històries de les pedres, els arbres i les persones que visiten.",
<<<<<<< HEAD
    avatar: avatarSarai1,
    hoverAvatar: avatarSarai2,
    category: 'helper',
=======
    avatar: avatar5,
    avatar2: avatar5_2,
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213
  },
];
