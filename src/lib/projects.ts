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
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Visual Design",
    year: "2024",
    description: "",
    featured: true,
    role: "Designer",
    tags: ["Graphic Design", "Visual Design"],
    placeholderBg: "#D5DCE4",
  },
  {
    id: "presentation-design",
    title: "Presentation Design",
    category: "Visual Design",
    year: "2024",
    description: "",
    featured: true,
    role: "Designer",
    tags: ["Presentation Design"],
    placeholderBg: "#D5E2DC",
  },
];
