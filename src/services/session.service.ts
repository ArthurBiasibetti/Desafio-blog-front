import { IUser } from '../interfaces';
import { ISessionInput } from '../interfaces/ISessionInput';
import HttpClient from './httpClient';

export default class SessionService {
  static async login(input: ISessionInput): Promise<{ token: string; data: IUser }> {
    const { headers, data } = await HttpClient.api.post('/user/session', input);

    const token = headers.authorization || '';

    return { token, data };
  }
}
