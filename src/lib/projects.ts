export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  featured: boolean;
  tags: string[];
  role: string;
  client?: string;
  placeholderBg: string;
  thumbnail?: string;
  logo?: string;
}

export const projects: Project[] = [
  {
    id: "schema",
    title: "Schema",
    category: "Product Design · EdTech",
    year: "2024 - Present",
    description: "",
    featured: true,
    role: "Product Designer",
    tags: ["Product Design", "EdTech"],
    placeholderBg: "#FAFAF8",
    logo: "/schema/logo.svg",
  },
  {
    id: "marketeq",
    title: "Marketeq",
    category: "Product Design · UX Strategy",
    year: "2023",
    description: "",
    featured: true,
    role: "Product Designer",
    tags: ["Product Design", "UX Strategy"],
    placeholderBg: "#E4DDD5",
    thumbnail: "/marketeq_markup.jpg",
  },
];
