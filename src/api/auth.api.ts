import {IUser} from '@myapp/models/user.model';

export function loginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUser> {
  return new Promise<IUser>((resolve, reject) => {
    if (email === 'trungkien@gmail.com' && password === 'kiennt2001') {
      setTimeout(
        () =>
          resolve({
            id: 1,
            email,
            fullName: 'Ninh Trung Kiên',
            userName: 'ninhTKieen',
            dateOfBirth: '28/11/2001',
          }),
        1000,
      );
    } else {
      reject({error: 'Wrong Email or Password'});
    }
  });
}
