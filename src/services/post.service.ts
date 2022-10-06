import { IPost } from '../interfaces/Ipost';
import HttpClient from './httpClient';

export default class PostService {
  static async getAll(): Promise<IPost[]> {
    const { data } = await HttpClient.api.get('/post');

    return data;
  }

  static async getByUser(): Promise<IPost[]> {
    const { data } = await HttpClient.api.get('/post/user');

    return data;
  }
}
