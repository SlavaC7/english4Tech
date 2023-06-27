export type TInitialState = {
  accesToken: string | null;
  isAdmin: boolean | null;
  email: boolean | null;
  password: boolean | null;
  verification: {} | null;
  result: string | null;
};

export type sendAuthRequest = {
  email: string;
  password: string;
};

export type takeTokenAuthResponse = {
  access_token: string;
  isAdmin: boolean;
  email: boolean;
  password: boolean;
};

export type sendRegRequest = {
  email: string;
  userName: string;
  password: string;
  gender: string;
};

export type sendCodeRequest = {
  code: string;
};

export type getCodeResponse = {
  result: string;
};

export type takeTokenRegResponse = {
  access_token: string;
  isAdmin: boolean;
  verification: {
    result: string;
    verifyCode: string;
  };
};
