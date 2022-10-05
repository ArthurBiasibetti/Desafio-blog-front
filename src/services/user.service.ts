import HttpClient from './httpClient';
import { IUser } from '../interfaces';

export default class UsersService {
  static async getUsers(): Promise<IUser[]> {
    const { data } = await HttpClient.api.get<IUser[]>('/users');
    return data;
  }

  static async getUser(id: string): Promise<IUser> {
    const { data } = await HttpClient.api.get(`/users/${id}`);
    return data;
  }

  static async create(input: { name: string; password: string; email: string }): Promise<void> {
    const { data } = await HttpClient.api.post('/users', input);
    return data;
  }
}
