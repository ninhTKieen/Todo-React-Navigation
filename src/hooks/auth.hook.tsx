import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '@myapp/features/auth/auth.slice';

import {useAppSelector} from './redux.hook';

const useCheckAuth = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return {currentUser, isLoggedIn};
};

export default useCheckAuth;
