export interface IUser {
  id: number | string;
  email: string;
  fullName: string;
  userName: string;
  dateOfBirth: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
  currentUser?: IUser;
}
