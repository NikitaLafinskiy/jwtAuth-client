import { IUser } from './models/IUser.d';

export interface authResType {
  user: IUser;
  activeToken: string;
  refreshToken: string;
}

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  error: string;
}
