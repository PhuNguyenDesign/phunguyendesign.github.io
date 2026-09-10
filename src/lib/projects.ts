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
}

export const projects: Project[] = [
  {
    id: "factor-ae",
    title: "Factor AE",
    category: "Product Design · UX Strategy",
    year: "2024",
    description:
      "Enterprise project management platform for architecture and engineering firms. Designed end-to-end workflows for project planning, resource allocation, and financial tracking.",
    featured: true,
    role: "Product Designer",
    client: "Schema",
    tags: ["Product Design", "UX Strategy", "Enterprise"],
    placeholderBg: "#E4DDD5",
  },
  {
    id: "open-edx",
    title: "Open edX",
    category: "Design Systems · Interaction Design",
    year: "2023",
    description:
      "Learning management system design and design system development for the Open edX platform, serving millions of learners worldwide.",
    featured: true,
    role: "Product Designer",
    client: "Schema",
    tags: ["Design Systems", "Interaction Design", "Education"],
    placeholderBg: "#D5DCE4",
  },
  {
    id: "cleardemand",
    title: "ClearDemand",
    category: "Product Design · Design Systems",
    year: "2024",
    description:
      "Retail pricing and promotion platform for grocery management. Designed complex data visualization interfaces and a comprehensive design system for pricing workflows.",
    featured: true,
    role: "Product Designer",
    client: "Schema",
    tags: ["Product Design", "Design Systems", "Data Visualization"],
    placeholderBg: "#D5E2DC",
  },
];
