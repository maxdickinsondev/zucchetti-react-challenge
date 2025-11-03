export enum StatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export type CreateUser = {
  name: string;
  email: string;
  status: StatusEnum;
};

export type User = CreateUser & {
  id: string;
};
