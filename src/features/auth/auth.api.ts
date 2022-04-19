import {API_END_POINT} from '@env';
import {
  ILoginPayload,
  IRegisterPayload,
  IToken,
  IUser,
} from '@myapp/models/auth.model';

import {axiosRequest, axiosMethod} from '@myapp/utils/api.utils';

class AuthenAPI {
  async loginAPI({
    email,
    password,
  }: ILoginPayload): Promise<{accessToken: string}> {
    const url = `${API_END_POINT}/api/TokenAuth/Authenticate`;
    const data = {
      userNameOrEmailAddress: email,
      password,
      rememberClient: true,
    };
    const response = await axiosRequest({
      url,
      method: axiosMethod.POST,
      data,
    });

    return {accessToken: response.result.accessToken};
  }

  async registerAPI({
    name,
    surname,
    userName,
    emailAddress,
    password,
    phoneNumber,
    address,
    gender,
    dateOfBirth,
  }: IRegisterPayload): Promise<{accessToken: string}> {
    const url = `${API_END_POINT}/api/services/app/Account/Register`;
    const data = {
      name,
      surname,
      userName,
      emailAddress,
      password,
      phoneNumber,
      address,
      gender,
      dateOfBirth,
    };
    await axiosRequest({
      url,
      method: axiosMethod.POST,
      data,
    });

    return this.loginAPI({email: emailAddress, password});
  }

  async getUserAPI({accessToken}: IToken): Promise<IUser> {
    const url = `${API_END_POINT}/api/services/app/User/GetDetail`;
    const response = await axiosRequest({
      token: accessToken,
      url,
      method: axiosMethod.GET,
    });

    return response.result;
  }
}

export default new AuthenAPI();
