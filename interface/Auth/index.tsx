export interface LoginImp {
  username: string;
  password: string;
}

export interface LoginValidateImp {
  onLogin: (login: LoginImp) => boolean;
  checkValidate: (loginValidate: boolean) => void;
}

export interface LogoutValidateImp {
  onLogOut: (logOut: boolean) => void;
}
