import { IPost } from '../interfaces/Ipost';
import HttpClient from './httpClient';

export default class PostService {
  static async getAll(): Promise<IPost[]> {
    const { data } = await HttpClient.api.get('/post');

    return data;
  }
}
