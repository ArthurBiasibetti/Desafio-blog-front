export interface IUser {
  created_at: Date;
  updated_at: Date;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
  id: string;
}
