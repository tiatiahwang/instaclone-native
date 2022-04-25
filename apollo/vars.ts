import { makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar('');

export const logUserIn = (token: string) => {
  console.log(token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  isLoggedInVar(false);
  tokenVar('');
};
