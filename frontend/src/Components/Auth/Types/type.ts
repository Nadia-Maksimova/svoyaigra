export type User = {
  id?: number;
  name?: string;
  email: string;
  password: string;
};

export type State = {
  user: {} | User;
  message: '' | string;
};

export type Res = {
  message: string;
  user?: string;
};
