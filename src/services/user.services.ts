import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { IUser } from 'types/models/IUser.d';

export class AuthService {
  static async getUser(): Promise<AxiosResponse<IUser>> {
    return $api.get('/getUser');
  }
}
