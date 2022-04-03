import { AuthService } from 'services/auth.services';
import { AppDispatch } from 'store/store';
import { authSlice } from 'store/auth/AuthSlice';

const { actions } = authSlice;
const { auth, authDidFail, authLogout } = actions;

export class AuthActions {
  static login(email: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthService.login(email, password);
        localStorage.setItem('token', res.data.activeToken);
        dispatch(auth(res.data));
      } catch (err) {
        dispatch(authDidFail(err.message));
      }
    };
  }

  static register(email: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthService.register(email, password);
        localStorage.setItem('token', res.data.activeToken);
        dispatch(auth(res.data));
      } catch (err) {
        console.log(err.message);
        dispatch(authDidFail(err.message));
      }
    };
  }

  static logout() {
    return async (dispatch: AppDispatch) => {
      try {
        await AuthService.logout();
        localStorage.removeItem('token');
        dispatch(authLogout);
      } catch (err) {
        dispatch(authDidFail('Unable to log out'));
      }
    };
  }

  static getUser(id: number) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthService.getUser(id);
        dispatch(auth(res.data));
      } catch (err) {
        dispatch(authDidFail('Unable to get user'));
      }
    };
  }
}
