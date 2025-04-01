export interface ProcessStep {
  name: string;
  color: string;
  description: string;
  author: string;
}

export const processData: ProcessStep[] = [
  {
    name: "Discovery",
    color: "#f9fafb",
    description: "Understanding your business needs and technical requirements through comprehensive analysis.",
    author: "Lindy Team"
  },
  {
    name: "Strategy",
    color: "#f9fafb",
    description: "Developing a tailored approach to achieve your business objectives and technical goals.",
    author: "Lindy Team"
  },
  {
    name: "Implement & Manage",
    color: "#f9fafb",
    description: "Executing the strategy with precision and providing continuous support and optimization.",
    author: "Lindy Team"
  }
] 