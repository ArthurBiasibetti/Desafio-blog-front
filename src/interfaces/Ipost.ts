export interface IPost {
  id: string;
  name: string;
  description: string;
  createad_at: Date;
  updated_at: Date;
  categories: { id: string; name: string }[];
  author: { name: string };
}
