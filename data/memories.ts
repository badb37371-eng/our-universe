export type Memory = {
  id: number;
  type: "image" | "video";
  src: string;
  date?: string;
  title: string;
  caption: string;
};

export const memories: Memory[] = [
  {
    id: 1,
    type: "image",
    src: "/images/memory1.jpg",
    date: "22 July 2023",
    title: "Our Story Began ❤️",
    caption: "আজ থেকে শুরু হয়েছিল আমাদের গল্প...",
  },

  // ...rest of your memories
];