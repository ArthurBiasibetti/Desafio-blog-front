import { IPost } from './Ipost';

export interface IUser {
  name: string;
  posts: IPost[];
  role: 'ADMIN' | 'USER';
  id: string;
}
