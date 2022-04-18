export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
}

export interface IUser {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  phoneNumber: string;
  lastLoginTime: string;
  creationTime: string;
  roleNames: any;
  homeAddress: string;
  addressOfBirth: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  profilePictureId: string;
  imageUrl?: any;
  phanKhuId: number;
  houseId: number;
  identityNumber: any;
  qrCodeBase64: any;
  stateFriend: number;
  id: number;
}

export interface IAuthState {
  currentUser?: IUser;
  isLoggedIn: boolean;
  accessToken?: string;

  isPendingLoggedIn: boolean;
  isPendingRegister: boolean;
  isFetchingUserAPI: boolean;
}

export interface IToken {
  accessToken: string;
}
