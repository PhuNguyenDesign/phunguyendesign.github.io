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
}

export const projects: Project[] = [
  {
    id: "schema",
    title: "Schema",
    category: "Product Design · EdTech",
    year: "2025",
    description: "",
    featured: true,
    role: "Product Designer",
    tags: ["Product Design", "EdTech"],
    placeholderBg: "#E8E4F0",
  },
  {
    id: "marketeq",
    title: "Marketeq",
    category: "Product Design · UX Strategy",
    year: "2024",
    description: "",
    featured: true,
    role: "Product Designer",
    tags: ["Product Design", "UX Strategy"],
    placeholderBg: "#E4DDD5",
    thumbnail: "/marketeq_markup.jpg",
  },
];
