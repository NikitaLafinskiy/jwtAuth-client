import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { authResType } from 'types/auth.d';

export class AuthService {
  static async register(
    email: string,
    password: string
  ): Promise<AxiosResponse<authResType>> {
    return $api.post('/register', { email, password });
  }

  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<authResType>> {
    return $api.post('/login', { email, password });
  }

  static async logout(): Promise<AxiosResponse> {
    return $api.get('/logout');
  }

  static async getUser(id): Promise<AxiosResponse> {
    return $api.get('/user/' + id);
  }
}
