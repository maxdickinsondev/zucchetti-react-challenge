export type CreateUser = {
  name: string;
  email: string;
  status: string;
};

export type User = CreateUser & {
  id: string;
};
